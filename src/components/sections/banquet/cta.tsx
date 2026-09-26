import { ContactFormBase } from "@/components/ui/contact-form-base";

export function BanquetCta() {
  return (
    <ContactFormBase
      id="zayavka"
      title="Оставить заявку"
      showContactMeta={false}
      showSocials={false}
      withDate
      withTime
      messageLabel="Доп. вопросы"
      messagePlaceholder="Расскажите про мероприятие: повод, количество гостей, пожелания..."
      messageOptional
      submitLabel="Оставить заявку"
      submittedLabel="Заявка принята!"
      footerHint="Мы свяжемся с вами в ближайшее время и обсудим все детали."
    />
  )
}