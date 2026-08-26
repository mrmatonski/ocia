import { contactPlaceholders } from "@/lib/site";
import { MailIcon, PersonIcon, PhoneIcon, PinIcon } from "@/components/icons";

const details = [
  {
    icon: PersonIcon,
    label: "OCIA Coordinator",
    value: contactPlaceholders.coordinatorName,
  },
  {
    icon: MailIcon,
    label: "Email",
    value: contactPlaceholders.email,
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: contactPlaceholders.phone,
  },
  {
    icon: PinIcon,
    label: "Location",
    value: contactPlaceholders.location,
  },
];

export function ContactDetails() {
  return (
    <div>
      <p className="eyebrow">Reach the team</p>
      <h2 className="mt-4 font-serif text-4xl text-ivory italic md:text-5xl">
        We would be glad to hear from you.
      </h2>
      <p className="mt-6 max-w-md text-sm leading-7 text-stone-light md:text-base">
        {/* TODO: Replace contact placeholders with official parish OCIA contacts. */}
        Share your name and a little of your story. Someone from the OCIA team
        will respond as soon as the official contact details are in place.
      </p>
      <ul className="mt-10 space-y-5">
        {details.map((item) => (
          <li
            key={item.label}
            className="flex items-start gap-4 border-b border-gold/15 pb-5"
          >
            <span className="mt-0.5 text-gold">
              <item.icon />
            </span>
            <div>
              <p className="text-[0.65rem] tracking-[0.2em] text-gold uppercase">
                {item.label}
              </p>
              <p className="mt-1 font-serif text-xl text-ivory">{item.value}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm leading-7 text-stone-light">
        {contactPlaceholders.addressLine}
        <br />
        {contactPlaceholders.cityLine}
      </p>
    </div>
  );
}
