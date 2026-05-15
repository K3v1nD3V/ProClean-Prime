// components/ui/button.tsx
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `
    group/button
    relative
    inline-flex
    shrink-0
    items-center
    justify-center
    overflow-hidden
    rounded-4xl
    border
    border-transparent
    text-sm
    font-medium
    whitespace-nowrap
    transition-all
    duration-300
    outline-none
    select-none
    focus-visible:border-ring
    focus-visible:ring-[3px]
    focus-visible:ring-ring/50
    active:not-aria-[haspopup]:translate-y-px
    disabled:pointer-events-none
    disabled:opacity-50
    aria-invalid:border-destructive
    aria-invalid:ring-[3px]
    aria-invalid:ring-destructive/20
    dark:aria-invalid:border-destructive/50
    dark:aria-invalid:ring-destructive/40
    [&_svg]:pointer-events-none
    [&_svg]:shrink-0
    [&_svg:not([class*='size-'])]:size-4
  `,
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/80",
        cta: `
  rounded-full
  relative
  overflow-hidden
  border border-[#b8891a]

  bg-[linear-gradient(135deg,#a87408_0%,#d4a017_18%,#f4d35e_32%,#d4a017_48%,#b8860b_65%,#f6dc7b_82%,#b07a09_100%)]

  text-black
  font-semibold

  shadow-[0_10px_30px_rgba(218,165,32,0.30)]
  transition-all
  duration-500

  hover:-translate-y-1
  hover:scale-[1.03]
  hover:shadow-[0_20px_50px_rgba(218,165,32,0.42)]
  active:scale-[0.99]

  before:content-['']
  before:absolute
  before:inset-0
  before:bg-[linear-gradient(110deg,transparent_0%,transparent_38%,rgba(255,255,255,0.15)_44%,rgba(255,255,255,0.95)_50%,rgba(255,255,255,0.18)_56%,transparent_62%,transparent_100%)]
  before:translate-x-[-180%]
  before:transition-transform
  before:duration-1000
  before:ease-out
  hover:before:translate-x-[180%]

  after:content-['']
  after:absolute
  after:left-[8%]
  after:right-[8%]
  after:top-[10%]
  after:h-[40%]
  after:rounded-full
  after:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35),rgba(255,255,255,0.08),transparent)]

  [&>*]:relative
  [&>*]:z-10

  [&_svg]:transition-transform
  [&_svg]:duration-300
  hover:[&_svg]:translate-x-0.5
`,

        outline:
          "border-border bg-input/30 hover:bg-input/50 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",

        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",

        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",

        link:
          "text-primary underline-offset-4 hover:underline",
      },

      size: {
        default:
          "h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",

        xs:
          "h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",

        sm:
          "h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",

        lg:
          "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",

        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
        })
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };