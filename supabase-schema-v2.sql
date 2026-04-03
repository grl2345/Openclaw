-- ============================================================
-- OpenClaw Hub - Phase 3: News & Changelog Tables
-- Run in Supabase SQL Editor after the initial schema
-- ============================================================

-- ─── 1. News / Community Feed Table ─────────────────────────
CREATE TABLE IF NOT EXISTS public.openclaw_news (
  id           UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  source       TEXT        NOT NULL DEFAULT '',
  author       TEXT        NOT NULL DEFAULT '',
  date         DATE,
  title_zh     TEXT        NOT NULL DEFAULT '',
  title_en     TEXT        NOT NULL DEFAULT '',
  desc_zh      TEXT        NOT NULL DEFAULT '',
  desc_en      TEXT        NOT NULL DEFAULT '',
  tags         TEXT[]      NOT NULL DEFAULT '{}',
  view_count   INTEGER     NOT NULL DEFAULT 0,
  url          TEXT        NOT NULL DEFAULT '',
  category     TEXT        NOT NULL DEFAULT 'programming'
                           CHECK (category IN ('official','research','programming','data','design','productivity')),
  status       TEXT        NOT NULL DEFAULT 'published'
                           CHECK (status IN ('draft','published')),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Auto-update updated_at
DROP TRIGGER IF EXISTS openclaw_news_updated_at ON public.openclaw_news;
CREATE TRIGGER openclaw_news_updated_at
  BEFORE UPDATE ON public.openclaw_news
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- Indexes
CREATE INDEX IF NOT EXISTS news_date_idx     ON public.openclaw_news (date DESC);
CREATE INDEX IF NOT EXISTS news_status_idx   ON public.openclaw_news (status);
CREATE INDEX IF NOT EXISTS news_category_idx ON public.openclaw_news (category);

-- RLS
ALTER TABLE public.openclaw_news ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read published news" ON public.openclaw_news;
CREATE POLICY "Public read published news"
  ON public.openclaw_news FOR SELECT
  USING (status = 'published');

-- ─── 2. Changelog Table ────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.openclaw_changelog (
  id               UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  slug             TEXT        UNIQUE NOT NULL,
  version          TEXT        NOT NULL,
  release_date     DATE        NOT NULL,
  released_by      TEXT        NOT NULL DEFAULT 'core-team',
  contributor_count INTEGER    NOT NULL DEFAULT 0,
  cover_image      TEXT        NOT NULL DEFAULT '/logo.webp',
  github_url       TEXT        NOT NULL DEFAULT '',
  tagline_zh       TEXT        NOT NULL DEFAULT '',
  tagline_en       TEXT        NOT NULL DEFAULT '',
  summary_zh       TEXT        NOT NULL DEFAULT '',
  summary_en       TEXT        NOT NULL DEFAULT '',
  highlights       JSONB       NOT NULL DEFAULT '[]',
  sections         JSONB       NOT NULL DEFAULT '[]',
  status           TEXT        NOT NULL DEFAULT 'published'
                               CHECK (status IN ('draft','published')),
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Auto-update updated_at
DROP TRIGGER IF EXISTS openclaw_changelog_updated_at ON public.openclaw_changelog;
CREATE TRIGGER openclaw_changelog_updated_at
  BEFORE UPDATE ON public.openclaw_changelog
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- Indexes
CREATE INDEX IF NOT EXISTS changelog_release_date_idx ON public.openclaw_changelog (release_date DESC);
CREATE INDEX IF NOT EXISTS changelog_slug_idx         ON public.openclaw_changelog (slug);

-- RLS
ALTER TABLE public.openclaw_changelog ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read published changelog" ON public.openclaw_changelog;
CREATE POLICY "Public read published changelog"
  ON public.openclaw_changelog FOR SELECT
  USING (status = 'published');

-- ─── 3. RSS Feed Sources Table (for auto-aggregation) ──────
CREATE TABLE IF NOT EXISTS public.openclaw_rss_sources (
  id           UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  name         TEXT        NOT NULL,
  feed_url     TEXT        UNIQUE NOT NULL,
  category     TEXT        NOT NULL DEFAULT 'programming',
  enabled      BOOLEAN     NOT NULL DEFAULT true,
  last_fetched TIMESTAMPTZ,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- Done! After running this:
-- 1. News and changelog can be managed via /admin
-- 2. RSS sources can be configured for auto-aggregation
-- ============================================================
