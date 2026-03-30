-- ============================================================
-- OpenClaw Hub - Blog/Tutorial System Schema
-- 在 Supabase SQL Editor 中运行此文件
-- ============================================================

-- 1. 文章表
CREATE TABLE IF NOT EXISTS public.articles (
  id           UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  title_zh     TEXT        NOT NULL DEFAULT '',
  title_en     TEXT        NOT NULL DEFAULT '',
  slug         TEXT        UNIQUE NOT NULL,
  content_zh   TEXT        NOT NULL DEFAULT '',
  content_en   TEXT        NOT NULL DEFAULT '',
  excerpt_zh   TEXT        NOT NULL DEFAULT '',
  excerpt_en   TEXT        NOT NULL DEFAULT '',
  cover_image  TEXT,
  category     TEXT        NOT NULL DEFAULT 'tutorial'
                           CHECK (category IN ('tutorial', 'blog', 'guide', 'tips')),
  tags         TEXT[]      NOT NULL DEFAULT '{}',
  author       TEXT        NOT NULL DEFAULT 'OpenClaw Hub',
  status       TEXT        NOT NULL DEFAULT 'draft'
                           CHECK (status IN ('draft', 'published')),
  view_count   INTEGER     NOT NULL DEFAULT 0,
  published_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. 自动更新 updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS articles_updated_at ON public.articles;
CREATE TRIGGER articles_updated_at
  BEFORE UPDATE ON public.articles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- 3. 索引
CREATE INDEX IF NOT EXISTS articles_slug_idx    ON public.articles (slug);
CREATE INDEX IF NOT EXISTS articles_status_idx  ON public.articles (status);
CREATE INDEX IF NOT EXISTS articles_category_idx ON public.articles (category);
CREATE INDEX IF NOT EXISTS articles_created_idx ON public.articles (created_at DESC);

-- 4. 行级安全 (RLS)
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- 公开读取已发布的文章
DROP POLICY IF EXISTS "Public read published articles" ON public.articles;
CREATE POLICY "Public read published articles"
  ON public.articles FOR SELECT
  USING (status = 'published');

-- Service Role Key 绕过 RLS，用于后台管理操作

-- ============================================================
-- 5. 存储桶（图片上传）
-- 注意：在 Supabase 控制台 Storage → New bucket 创建
--   Bucket 名称: article-images
--   Public bucket: ✅ (勾选)
--
-- 或者运行下面的 SQL（需要 superuser 权限）：
-- ============================================================
-- INSERT INTO storage.buckets (id, name, public)
-- VALUES ('article-images', 'article-images', true)
-- ON CONFLICT DO NOTHING;

-- Storage 策略（需要先创建 bucket）
-- 清理所有可能存在的旧策略（无论名称如何）
DROP POLICY IF EXISTS "Public read article images" ON storage.objects;
DROP POLICY IF EXISTS "Public read openclaw blog images" ON storage.objects;
DROP POLICY IF EXISTS "Service role upload article images" ON storage.objects;
DROP POLICY IF EXISTS "Service role delete article images" ON storage.objects;
DROP POLICY IF EXISTS "Allow public access" ON storage.objects;
DROP POLICY IF EXISTS "Give public access to article-images" ON storage.objects;

-- 公开读取图片
CREATE POLICY "Public read article images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'article-images');

-- 允许上传（通过 Service Role Key，在 API 中完成）
CREATE POLICY "Service role upload article images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'article-images');

CREATE POLICY "Service role delete article images"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'article-images');

-- ============================================================
-- 6. 浏览量自增函数（前端调用，避免并发问题）
-- ============================================================
CREATE OR REPLACE FUNCTION public.increment_view_count(article_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE public.articles
  SET view_count = view_count + 1
  WHERE id = article_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================
-- 完成！接下来：
-- 1. 在 Supabase Storage 中创建名为 article-images 的 public bucket
-- 2. 复制 .env.local.example 为 .env.local 并填入你的 Supabase 配置
-- ============================================================
