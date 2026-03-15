"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Handshake } from "lucide-react"

interface BusinessCoopDialogProps {
  /** 若为 true，渲染为右下角固定悬浮按钮，全网展示；否则为内联按钮（如顶栏） */
  floating?: boolean
  onOpenChange?: (open: boolean) => void
}

export function BusinessCoopDialog({ floating = true, onOpenChange }: BusinessCoopDialogProps) {
  const { t } = useI18n()

  const trigger = (
    <button
      type="button"
      className={
        floating
          ? "fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
          : "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:bg-primary/90"
      }
      aria-label={t("nav.businessCoop")}
    >
      <Handshake className="h-4 w-4 shrink-0" />
      <span>{t("nav.businessCoop")}</span>
      {floating && (
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-background" aria-hidden />
      )}
    </button>
  )

  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-[280px] p-6 sm:max-w-[320px]">
        <DialogTitle className="text-center text-lg font-semibold text-foreground">
          {t("businessCoop.title")}
        </DialogTitle>
        <div className="mt-4 flex justify-center">
          <Image
            src="/contact/wechat-personal.png"
            alt="WeChat"
            width={220}
            height={220}
            className="rounded-lg object-contain"
          />
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          {t("businessCoop.remark")}
        </p>
      </DialogContent>
    </Dialog>
  )
}
