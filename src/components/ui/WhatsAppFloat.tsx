import { SITE } from "@/lib/utils";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi SevenSkys, I'd like a transport quote.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SevenSkys on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-signature hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M16.02 3C9.4 3 4 8.37 4 15c0 2.36.63 4.57 1.75 6.48L4 29l7.72-1.7A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.63 28 15S22.63 3 16.02 3Zm0 21.6c-2.05 0-3.96-.6-5.57-1.63l-.4-.24-4.6 1.01 1.04-4.48-.26-.42A9.5 9.5 0 0 1 4.86 15c0-6.15 5.01-10.86 11.16-10.86 6.15 0 10.98 4.86 10.98 10.86S22.17 24.6 16.02 24.6Zm5.98-8.13c-.33-.16-1.94-.96-2.24-1.07-.3-.11-.52-.16-.74.16-.22.33-.85 1.07-1.04 1.28-.19.22-.38.25-.71.08-.33-.16-1.4-.51-2.66-1.63-.98-.88-1.65-1.96-1.84-2.29-.19-.33-.02-.5.14-.67.15-.15.33-.38.5-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.12-1.14 2.73s1.17 3.16 1.33 3.38c.16.22 2.31 3.53 5.6 4.95.78.34 1.39.54 1.86.69.78.25 1.49.21 2.05.13.63-.09 1.94-.79 2.21-1.56.27-.77.27-1.43.19-1.56-.08-.14-.3-.22-.63-.38Z" />
      </svg>
    </a>
  );
}
