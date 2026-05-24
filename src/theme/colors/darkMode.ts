import variantColor from './variantColor';

const textColor = {
  // solid
  'text/solid/primary': variantColor.primary.neutral.white,
  'text/solid/secondary': variantColor.primary.neutral[100],
  'text/solid/tertiary': variantColor.primary.neutral[300],
  'text/solid/primary-inverse': variantColor.primary.neutral[800],
  'text/solid/secondary-inverse': variantColor.primary.neutral[600],
  'text/solid/tertiary-inverse': variantColor.primary.neutral[400],
  'text/solid/disabled': variantColor.primary.neutral[600],
  'text/solid/disabled-alt': variantColor.primary.neutral[500],
  'text/solid/white': variantColor.base.white,
  'text/solid/black': variantColor.primary.neutral[950],
  'text/solid/brand': variantColor.primary.brand[400],
  'text/solid/brand-alt': variantColor.primary.brand[100],
  'text/solid/brand-inverse': variantColor.primary.brand.max,
  'text/solid/brand-disabled': variantColor.primary.brand[900],
  'text/solid/accent': variantColor.primary.accent[400],
  'text/solid/accent-alt': variantColor.primary.accent[100],
  'text/solid/accent-alt-dark': variantColor.primary.accent[900],
  'text/solid/accent-inverse': variantColor.primary.accent[950],
  'text/solid/accent-disabled': variantColor.primary.accent[900],
  'text/solid/danger': variantColor.primary.red[500],
  'text/solid/danger-alt': variantColor.primary.red[100],
  'text/solid/danger-inverse': variantColor.primary.red.max,
  'text/solid/danger-disabled': variantColor.primary.red[800],
  'text/solid/warning': variantColor.primary.orange[400],
  'text/solid/warning-alt': variantColor.primary.orange[100],
  'text/solid/warning-inverse': variantColor.primary.orange.max,
  'text/solid/warning-disabled': variantColor.primary.orange[900],
  'text/solid/success': variantColor.primary.brand[400],
  'text/solid/success-alt': variantColor.primary.brand[100],
  'text/solid/success-inverse': variantColor.primary.brand.max,
  'text/solid/success-disabled': variantColor.primary.brand[900],
  'text/solid/buy': variantColor.primary.blue[300],
  'text/solid/buy-alt': variantColor.primary.blue[50],
  'text/solid/buy-inverse': variantColor.primary.blue.max,
  'text/solid/buy-disabled': variantColor.primary.blue[800],
  'text/solid/sell': variantColor.primary.rose[400],
  'text/solid/sell-alt': variantColor.primary.rose[100],
  'text/solid/sell-inverse': variantColor.primary.rose.max,
  'text/solid/sell-disabled': variantColor.primary.rose[800],
  // translucent
  'text/translucent/primary':
    variantColor['alpha-transparency'].white['white-90'],
  'text/translucent/primary-inverse':
    variantColor['alpha-transparency']['black-neutral']['black-90'],
  'text/translucent/primary-black':
    variantColor['alpha-transparency']['black-neutral']['black-90'],
  'text/translucent/primary-white':
    variantColor['alpha-transparency'].white['white-90'],
  'text/translucent/secondary':
    variantColor['alpha-transparency'].white['white-80'],
  'text/translucent/secondary-inverse':
    variantColor['alpha-transparency']['black-neutral']['black-80'],
  'text/translucent/secondary-black':
    variantColor['alpha-transparency']['black-neutral']['black-80'],
  'text/translucent/secondary-white':
    variantColor['alpha-transparency'].white['white-80'],
  'text/translucent/tertiary':
    variantColor['alpha-transparency'].white['white-70'],
  'text/translucent/tertiary-inverse':
    variantColor['alpha-transparency']['black-neutral']['black-70'],
  'text/translucent/tertiary-black':
    variantColor['alpha-transparency']['black-neutral']['black-70'],
  'text/translucent/tertiary-white':
    variantColor['alpha-transparency'].white['white-70'],
  'text/translucent/translucent-disabled':
    variantColor['alpha-transparency'].white['white-50'],
  'text/translucent/translucent-inverse-disabled':
    variantColor['alpha-transparency']['black-neutral']['black-40'],
  'text/translucent/translucent-black-disabled':
    variantColor['alpha-transparency']['black-neutral']['black-40'],
  'text/translucent/translucent-white-disabled':
    variantColor['alpha-transparency'].white['white-40'],
  // interactivity-overlay
  'text/interactivity-overlay/hover':
    variantColor['alpha-transparency']['black-neutral']['black-20'],
  'text/interactivity-overlay/pressed':
    variantColor['alpha-transparency']['black-neutral']['black-40'],
  'text/interactivity-overlay/hover-invert':
    variantColor['alpha-transparency'].white['white-20'],
  'text/interactivity-overlay/pressed-invert':
    variantColor['alpha-transparency'].white['white-40'],
  'text/interactivity-overlay/hover-subtle':
    variantColor['alpha-transparency']['black-neutral']['black-10'],
  'text/interactivity-overlay/pressed-subtle':
    variantColor['alpha-transparency']['black-neutral']['black-20'],
  'text/interactivity-overlay/hover-subtle-invert':
    variantColor['alpha-transparency'].white['white-10'],
  'text/interactivity-overlay/pressed-subtle-invert':
    variantColor['alpha-transparency'].white['white-20'],
};

const background = {
  'background/solid/bg-base': variantColor.primary.neutral.max,
  'background/solid/bg-base-hover': variantColor.primary.neutral[975],
  'background/solid/bg-base-pressed': variantColor.primary.neutral[950],
  'background/solid/bg-elevation-1': variantColor.primary.neutral[975],
  'background/solid/bg-elevation-1-hover': variantColor.primary.neutral[950],
  'background/solid/bg-elevation-1-pressed': variantColor.primary.neutral[900],
  'background/solid/bg-elevation-2': variantColor.primary.neutral[950],
  'background/solid/bg-elevation-2-hover': variantColor.primary.neutral[900],
  'background/solid/bg-elevation-2-pressed': variantColor.primary.neutral[800],
  'background/solid/bg-elevation-3': variantColor.primary.neutral[900],
  'background/solid/bg-elevation-3-hover': variantColor.primary.neutral[800],
  'background/solid/bg-elevation-3-pressed': variantColor.primary.neutral[700],
  'background/solid/bg-disabled': variantColor.primary.neutral[950],
  'background/solid/bg-disabled-alt': variantColor.primary.neutral.max,
  'background/solid/bg-disabled-alt-2': variantColor.primary.neutral[700],
  'background/solid/bg-white': variantColor.primary.neutral.white,
  'background/solid/bg-black': variantColor.primary.neutral.black,
  'background/solid/bg-brand': variantColor.primary.brand[500],
  'background/solid/bg-brand-hover': variantColor.primary.brand[400],
  'background/solid/bg-brand-pressed': variantColor.primary.brand[300],
  'background/solid/bg-brand-alt': variantColor.primary.brand[950],
  'background/solid/bg-brand-alt-hover': variantColor.primary.brand[900],
  'background/solid/bg-brand-alt-pressed': variantColor.primary.brand[800],
  'background/solid/bg-brand-alt-2': variantColor.primary.brand.max,
  'background/solid/bg-brand-alt-2-hover': variantColor.primary.brand[950],
  'background/solid/bg-brand-alt-2-pressed': variantColor.primary.brand[900],
  'background/solid/bg-accent': variantColor.primary.accent[500],
  'background/solid/bg-accent-hover': variantColor.primary.accent[400],
  'background/solid/bg-accent-pressed': variantColor.primary.accent[300],
  'background/solid/bg-accent-alt': variantColor.primary.accent[900],
  'background/solid/bg-accent-alt-hover': variantColor.primary.accent[800],
  'background/solid/bg-accent-alt-pressed': variantColor.primary.accent[700],
  'background/solid/bg-danger': variantColor.primary.red[500],
  'background/solid/bg-danger-hover': variantColor.primary.red[400],
  'background/solid/bg-danger-pressed': variantColor.primary.red[300],
  'background/solid/bg-danger-alt': variantColor.primary.red.max,
  'background/solid/bg-danger-alt-hover': variantColor.primary.red[950],
  'background/solid/bg-danger-alt-pressed': variantColor.primary.red[900],
  'background/solid/bg-warning': variantColor.primary.orange[500],
  'background/solid/bg-warning-hover': variantColor.primary.orange[400],
  'background/solid/bg-warning-pressed': variantColor.primary.orange[300],
  'background/solid/bg-warning-alt': variantColor.primary.orange.max,
  'background/solid/bg-warning-alt-hover': variantColor.primary.orange[950],
  'background/solid/bg-warning-alt-pressed': variantColor.primary.orange[900],
  'background/solid/bg-success': variantColor.primary.brand[500],
  'background/solid/bg-success-hover': variantColor.primary.brand[400],
  'background/solid/bg-success-pressed': variantColor.primary.brand[300],
  'background/solid/bg-success-alt': variantColor.primary.brand[950],
  'background/solid/bg-success-alt-hover': variantColor.primary.brand[900],
  'background/solid/bg-success-alt-pressed': variantColor.primary.brand[800],
  'background/solid/bg-buy': variantColor.primary.blue[400],
  'background/solid/bg-buy-hover': variantColor.primary.blue[300],
  'background/solid/bg-buy-pressed': variantColor.primary.blue[200],
  'background/solid/bg-buy-alt': variantColor.primary.blue[950],
  'background/solid/bg-buy-alt-hover': variantColor.primary.blue[900],
  'background/solid/bg-buy-alt-pressed': variantColor.primary.blue[800],
  'background/solid/bg-sell': variantColor.primary.rose[400],
  'background/solid/bg-sell-hover': variantColor.primary.rose[300],
  'background/solid/bg-sell-pressed': variantColor.primary.rose[200],
  'background/solid/bg-sell-alt': variantColor.primary.rose[900],
  'background/solid/bg-sell-alt-hover': variantColor.primary.rose[800],
  'background/solid/bg-sell-alt-pressed': variantColor.primary.rose[700],
  // Translucent
  'background/translucent/bg-none': 'rgba(255, 255, 255, 0)',
  'background/translucent/bg-none-inverse': 'rgba(28, 37, 47, 0)',
  'background/translucent/bg-inverse': 'rgba(0, 2, 19, 0)',
  'background/translucent/bg-inverse-2': 'rgba(5, 22, 36, 0)',
  'background/translucent/bg-elevated-surface': 'rgba(1, 16, 28, 0.8)',
  'background/translucent/bg-elevated-surface-2': 'rgba(1, 22, 36, 0.8)',
  'background/translucent/bg-overlay':
    variantColor['alpha-transparency']['true-black']['true-black-50'],
  'background/translucent/bg-minimal': 'rgba(255, 255, 255, 0.02)',
  'background/translucent/bg-inactive':
    variantColor['alpha-transparency'].white['white-05'],
  'background/translucent/bg-hover':
    variantColor['alpha-transparency'].white['white-10'],
  'background/translucent/bg-pressed':
    variantColor['alpha-transparency'].white['white-15'],
  'background/translucent/bg-disabled':
    variantColor['alpha-transparency'].white['white-05'],
  'background/translucent/bg-brand-inactive':
    variantColor['alpha-transparency']['brand-dark']['brand-05'],
  'background/translucent/bg-brand-hover':
    variantColor['alpha-transparency']['brand-dark']['brand-10'],
  'background/translucent/bg-brand-pressed':
    variantColor['alpha-transparency']['brand-dark']['brand-20'],
  'background/translucent/bg-accent-inactive':
    variantColor['alpha-transparency'].accent['accent-05'],
  'background/translucent/bg-accent-hover':
    variantColor['alpha-transparency'].accent['accent-10'],
  'background/translucent/bg-accent-pressed':
    variantColor['alpha-transparency'].accent['accent-20'],
  'background/translucent/bg-danger-inactive':
    variantColor['alpha-transparency'].red['red-05'],
  'background/translucent/bg-danger-hover':
    variantColor['alpha-transparency'].red['red-10'],
  'background/translucent/bg-danger-pressed':
    variantColor['alpha-transparency'].red['red-20'],
  'background/translucent/bg-warning-inactive':
    variantColor['alpha-transparency'].orange['orange-05'],
  'background/translucent/bg-warning-hover':
    variantColor['alpha-transparency'].orange['orange-10'],
  'background/translucent/bg-warning-pressed':
    variantColor['alpha-transparency'].orange['orange-20'],
  'background/translucent/bg-success-inactive':
    variantColor['alpha-transparency']['brand-dark']['brand-05'],
  'background/translucent/bg-success-hover':
    variantColor['alpha-transparency']['brand-dark']['brand-10'],
  'background/translucent/bg-success-pressed':
    variantColor['alpha-transparency']['brand-dark']['brand-20'],
  'background/translucent/bg-buy-inactive':
    variantColor['alpha-transparency'].blue['blue-05'],
  'background/translucent/bg-buy-hover':
    variantColor['alpha-transparency'].blue['blue-10'],
  'background/translucent/bg-buy-pressed':
    variantColor['alpha-transparency'].blue['blue-20'],
  'background/translucent/bg-sell-inactive':
    variantColor['alpha-transparency'].rose['rose-05'],
  'background/translucent/bg-sell-hover':
    variantColor['alpha-transparency'].rose['rose-10'],
  'background/translucent/bg-sell-pressed':
    variantColor['alpha-transparency'].rose['rose-20'],
};

// Gradients are kept separate from `colors` because Restyle's `colors` theme
// key only accepts `string` values. Gradients are arrays of color stops
// consumed by `react-native-linear-gradient` (or similar) at the call site.
export const gradients = {
  'background/gradient/bg-trending': [
    'rgba(38, 117, 214, 0.20)',
    variantColor.primary.neutral[975],
  ] as readonly string[],
};

const border = {
  'border/solid/none': 'rgba(0, 0, 0, 0)',
  'border/solid/primary': variantColor.primary.neutral[600],
  'border/solid/secondary': variantColor.primary.neutral[700],
  'border/solid/tertiary': variantColor.primary.neutral[800],
  'border/solid/quartenary': variantColor.primary.neutral[900],
  'border/solid/disabled': variantColor.primary.neutral[950],
  'border/solid/brand': variantColor.primary.brand[500],
  'border/solid/brand-alt': variantColor.primary.brand[800],
  'border/solid/brand-disabled': variantColor.primary.brand[950],
  'border/solid/accent': variantColor.primary.accent[500],
  'border/solid/accent-alt': variantColor.primary.accent[800],
  'border/solid/accent-disabled': variantColor.primary.accent[900],
  'border/solid/success': variantColor.primary.brand[500],
  'border/solid/success-alt': variantColor.primary.brand[800],
  'border/solid/success-disabled': variantColor.primary.brand[950],
  'border/solid/warning': variantColor.primary.orange[500],
  'border/solid/warning-alt': variantColor.primary.orange[700],
  'border/solid/warning-disabled': variantColor.primary.orange[950],
  'border/solid/danger': variantColor.primary.red[500],
  'border/solid/danger-alt': variantColor.primary.red[700],
  'border/solid/error-disabled': variantColor.primary.red[950],
  'border/solid/buy': variantColor.primary.blue[400],
  'border/solid/buy-alt': variantColor.primary.blue[700],
  'border/solid/buy-alt-2': variantColor.primary.blue[400],
  'border/solid/buy-disabled': variantColor.primary.blue[950],
  'border/solid/sell': variantColor.primary.rose[400],
  'border/solid/sell-alt': variantColor.primary.rose[700],
  'border/solid/sell-alt-2': variantColor.primary.rose[400],
  'border/solid/sell-disabled': variantColor.primary.rose[950],
  // translucent
  'border/translucent/none': 'rgba(255, 255, 255, 0)',
  'border/translucent/primary':
    variantColor['alpha-transparency'].white['white-70'],
  'border/translucent/secondary':
    variantColor['alpha-transparency'].white['white-50'],
  'border/translucent/tertiary':
    variantColor['alpha-transparency'].white['white-30'],
  'border/translucent/quartenary':
    variantColor['alpha-transparency'].white['white-20'],
  'border/translucent/quintenary':
    variantColor['alpha-transparency'].white['white-10'],
  'border/translucent/disabled':
    variantColor['alpha-transparency'].white['white-05'],
  'border/translucent/brand':
    variantColor['alpha-transparency']['brand-dark']['brand-15'],
  'border/translucent/brand-alt':
    variantColor['alpha-transparency']['brand-dark']['brand-10'],
  'border/translucent/brand-disabled':
    variantColor['alpha-transparency']['brand-dark']['brand-05'],
  'border/translucent/accent':
    variantColor['alpha-transparency'].accent['accent-15'],
  'border/translucent/accent-alt':
    variantColor['alpha-transparency'].accent['accent-10'],
  'border/translucent/accent-disabled':
    variantColor['alpha-transparency'].accent['accent-05'],
  'border/translucent/danger': variantColor['alpha-transparency'].red['red-15'],
  'border/translucent/danger-alt':
    variantColor['alpha-transparency'].red['red-10'],
  'border/translucent/danger-disabled':
    variantColor['alpha-transparency'].red['red-05'],
  'border/translucent/warning':
    variantColor['alpha-transparency'].orange['orange-15'],
  'border/translucent/warning-alt':
    variantColor['alpha-transparency'].orange['orange-10'],
  'border/translucent/warning-disabled':
    variantColor['alpha-transparency'].orange['orange-05'],
  'border/translucent/success':
    variantColor['alpha-transparency']['brand-dark']['brand-15'],
  'border/translucent/success-alt':
    variantColor['alpha-transparency']['brand-dark']['brand-10'],
  'border/translucent/success-disabled':
    variantColor['alpha-transparency']['brand-dark']['brand-05'],
  'border/translucent/buy': variantColor['alpha-transparency'].blue['blue-15'],
  'border/translucent/buy-alt':
    variantColor['alpha-transparency'].blue['blue-10'],
  'border/translucent/buy-disabled':
    variantColor['alpha-transparency'].blue['blue-05'],
  'border/translucent/sell': variantColor['alpha-transparency'].rose['rose-15'],
  'border/translucent/sell-alt':
    variantColor['alpha-transparency'].rose['rose-10'],
  'border/translucent/sell-disabled':
    variantColor['alpha-transparency'].rose['rose-05'],
};

const icon = {
  'icon/solid/primary': variantColor.primary.neutral.white,
  'icon/solid/secondary': variantColor.primary.neutral[100],
  'icon/solid/tertiary': variantColor.primary.neutral[300],
  'icon/solid/primary-inverse': variantColor.primary.neutral[800],
  'icon/solid/secondary-inverse': variantColor.primary.neutral[600],
  'icon/solid/tertiary-inverse': variantColor.primary.neutral[400],
  'icon/solid/disabled': variantColor.primary.neutral[600],
  'icon/solid/disabled-alt': variantColor.primary.neutral[500],
  'icon/solid/white': variantColor.base.white,
  'icon/solid/black': variantColor.primary.neutral[950],
  'icon/solid/pure-black-white': variantColor.base.white,
  'icon/solid/brand-base': variantColor.primary.brand[500],
  'icon/solid/brand-text': variantColor.primary.brand[400],
  'icon/solid/brand-alt': variantColor.primary.brand[100],
  'icon/solid/brand-inverse': variantColor.primary.brand.max,
  'icon/solid/brand-disabled': variantColor.primary.brand[900],
  'icon/solid/accent-base': variantColor.primary.accent[500],
  'icon/solid/accent-text': variantColor.primary.accent[400],
  'icon/solid/accent-alt': variantColor.primary.accent[100],
  'icon/solid/accent-alt-dark': variantColor.primary.accent[900],
  'icon/solid/accent-inverse': variantColor.primary.accent[950],
  'icon/solid/accent-disabled': variantColor.primary.accent[900],
  'icon/solid/danger-base': variantColor.primary.red[500],
  'icon/solid/danger-text': variantColor.primary.red[500],
  'icon/solid/danger-alt': variantColor.primary.red[100],
  'icon/solid/danger-inverse': variantColor.primary.red.max,
  'icon/solid/danger-disabled': variantColor.primary.red[800],
  'icon/solid/warning-base': variantColor.primary.orange[500],
  'icon/solid/warning-text': variantColor.primary.orange[400],
  'icon/solid/warning-alt': variantColor.primary.orange[100],
  'icon/solid/warning-inverse': variantColor.primary.orange.max,
  'icon/solid/warning-disabled': variantColor.primary.orange[900],
  'icon/solid/success-base': variantColor.primary.brand[500],
  'icon/solid/success-text': variantColor.primary.brand[400],
  'icon/solid/success-alt': variantColor.primary.brand[100],
  'icon/solid/success-inverse': variantColor.primary.brand.max,
  'icon/solid/success-disabled': variantColor.primary.brand[900],
  'icon/solid/buy-base': variantColor.primary.blue[500],
  'icon/solid/buy-text': variantColor.primary.blue[300],
  'icon/solid/buy-alt': variantColor.primary.blue[50],
  'icon/solid/buy-inverse': variantColor.primary.blue.max,
  'icon/solid/buy-disabled': variantColor.primary.blue[800],
  'icon/solid/sell-base': variantColor.primary.rose[500],
  'icon/solid/sell-text': variantColor.primary.rose[400],
  'icon/solid/sell-alt': variantColor.primary.rose[100],
  'icon/solid/sell-inverse': variantColor.primary.rose.max,
  'icon/solid/sell-disabled': variantColor.primary.rose[800],
  // Translucent
  'icon/translucent/primary':
    variantColor['alpha-transparency'].white['white-90'],
  'icon/translucent/primary-inverse':
    variantColor['alpha-transparency']['black-neutral']['black-90'],
  'icon/translucent/primary-black':
    variantColor['alpha-transparency']['black-neutral']['black-90'],
  'icon/translucent/primary-white':
    variantColor['alpha-transparency'].white['white-90'],
  'icon/translucent/secondary':
    variantColor['alpha-transparency'].white['white-80'],
  'icon/translucent/secondary-inverse':
    variantColor['alpha-transparency']['black-neutral']['black-80'],
  'icon/translucent/secondary-black':
    variantColor['alpha-transparency']['black-neutral']['black-80'],
  'icon/translucent/secondary-white':
    variantColor['alpha-transparency'].white['white-80'],
  'icon/translucent/tertiary':
    variantColor['alpha-transparency'].white['white-70'],
  'icon/translucent/tertiary-inverse':
    variantColor['alpha-transparency']['black-neutral']['black-70'],
  'icon/translucent/tertiary-black':
    variantColor['alpha-transparency']['black-neutral']['black-70'],
  'icon/translucent/tertiary-white':
    variantColor['alpha-transparency'].white['white-70'],
  'icon/translucent/translucent-disabled':
    variantColor['alpha-transparency'].white['white-50'],
  'icon/translucent/translucent-inverse-disabled':
    variantColor['alpha-transparency']['black-neutral']['black-40'],
  'icon/translucent/translucent-black-disabled':
    variantColor['alpha-transparency']['black-neutral']['black-40'],
  'icon/translucent/translucent-white-disabled':
    variantColor['alpha-transparency'].white['white-40'],
};

const secondary = {
  // purple
  'secondary/purple/bg-solid': variantColor.secondary.purple[300],
  'secondary/purple/bg-solid-hover': variantColor.secondary.purple[200],
  'secondary/purple/bg-solid-pressed': variantColor.secondary.purple[100],
  'secondary/purple/bg-alt': variantColor.secondary.purple[900],
  'secondary/purple/bg-alt-hover': variantColor.secondary.purple[800],
  'secondary/purple/bg-alt-pressed': variantColor.secondary.purple[700],
  'secondary/purple/text': variantColor.secondary.purple[100],
  'secondary/purple/text-alt': variantColor.secondary.purple.min,
  'secondary/purple/text-inverse': variantColor.secondary.purple.max,
  'secondary/purple/text-disabled': variantColor.secondary.purple[900],
  'secondary/purple/icon-base': variantColor.secondary.purple[500],
  'secondary/purple/icon-text': variantColor.secondary.purple[100],
  'secondary/purple/icon-alt': variantColor.secondary.purple.min,
  'secondary/purple/icon-inverse': variantColor.secondary.purple.max,
  'secondary/purple/icon-disabled': variantColor.secondary.purple[900],
  'secondary/purple/border': variantColor.secondary.purple[400],
  'secondary/purple/border-alt': variantColor.secondary.purple[900],
  'secondary/purple/border-disabled': variantColor.secondary.purple[950],
  // teal
  'secondary/teal/bg-solid': variantColor.secondary.teal[300],
  'secondary/teal/bg-solid-hover': variantColor.secondary.teal[200],
  'secondary/teal/bg-solid-pressed': variantColor.secondary.teal[100],
  'secondary/teal/bg-alt': variantColor.secondary.teal[950],
  'secondary/teal/bg-alt-hover': variantColor.secondary.teal[900],
  'secondary/teal/bg-alt-pressed': variantColor.secondary.teal[800],
  'secondary/teal/text': variantColor.secondary.teal[400],
  'secondary/teal/text-alt': variantColor.secondary.teal[200],
  'secondary/teal/text-inverse': variantColor.secondary.teal.max,
  'secondary/teal/text-disabled': variantColor.secondary.teal[900],
  'secondary/teal/icon-base': variantColor.secondary.teal[500],
  'secondary/teal/icon-text': variantColor.secondary.teal[400],
  'secondary/teal/icon-alt': variantColor.secondary.teal[200],
  'secondary/teal/icon-inverse': variantColor.secondary.teal.max,
  'secondary/teal/icon-disabled': variantColor.secondary.teal[900],
  'secondary/teal/border': variantColor.secondary.teal[400],
  'secondary/teal/border-alt': variantColor.secondary.teal[900],
  'secondary/teal/border-disabled': variantColor.secondary.teal[950],

  // cyan
  'secondary/cyan/bg-solid': variantColor.secondary.cyan[300],
  'secondary/cyan/bg-solid-hover': variantColor.secondary.cyan[200],
  'secondary/cyan/bg-solid-pressed': variantColor.secondary.cyan[100],
  'secondary/cyan/bg-alt': variantColor.secondary.cyan[950],
  'secondary/cyan/bg-alt-hover': variantColor.secondary.cyan[900],
  'secondary/cyan/bg-alt-pressed': variantColor.secondary.cyan[800],
  'secondary/cyan/text': variantColor.secondary.cyan[400],
  'secondary/cyan/text-alt': variantColor.secondary.cyan[200],
  'secondary/cyan/text-inverse': variantColor.secondary.cyan.max,
  'secondary/cyan/text-disabled': variantColor.secondary.cyan[900],
  'secondary/cyan/icon-base': variantColor.secondary.cyan[500],
  'secondary/cyan/icon-text': variantColor.secondary.cyan[400],
  'secondary/cyan/icon-alt': variantColor.secondary.cyan[200],
  'secondary/cyan/icon-inverse': variantColor.secondary.cyan.max,
  'secondary/cyan/icon-disabled': variantColor.secondary.cyan[900],
  'secondary/cyan/border': variantColor.secondary.cyan[400],
  'secondary/cyan/border-alt': variantColor.secondary.cyan[900],
  'secondary/cyan/border-disabled': variantColor.secondary.cyan[950],

  // lime
  'secondary/lime/bg-solid': variantColor.secondary.lime[300],
  'secondary/lime/bg-solid-hover': variantColor.secondary.lime[200],
  'secondary/lime/bg-solid-pressed': variantColor.secondary.lime[100],
  'secondary/lime/bg-alt': variantColor.secondary.lime[950],
  'secondary/lime/bg-alt-hover': variantColor.secondary.lime[900],
  'secondary/lime/bg-alt-pressed': variantColor.secondary.lime[800],
  'secondary/lime/text': variantColor.secondary.lime[400],
  'secondary/lime/text-alt': variantColor.secondary.lime[200],
  'secondary/lime/text-inverse': variantColor.secondary.lime.max,
  'secondary/lime/text-disabled': variantColor.secondary.lime[900],
  'secondary/lime/icon-base': variantColor.secondary.lime[500],
  'secondary/lime/icon-text': variantColor.secondary.lime[400],
  'secondary/lime/icon-alt': variantColor.secondary.lime[200],
  'secondary/lime/icon-inverse': variantColor.secondary.lime.max,
  'secondary/lime/icon-disabled': variantColor.secondary.lime[900],
  'secondary/lime/border': variantColor.secondary.lime[400],
  'secondary/lime/border-alt': variantColor.secondary.lime[900],
  'secondary/lime/border-disabled': variantColor.secondary.lime[950],

  // fuchsia
  'secondary/fuchsia/bg-solid': variantColor.secondary.fuchsia[300],
  'secondary/fuchsia/bg-solid-hover': variantColor.secondary.fuchsia[200],
  'secondary/fuchsia/bg-solid-pressed': variantColor.secondary.fuchsia[100],
  'secondary/fuchsia/bg-alt': variantColor.secondary.fuchsia[950],
  'secondary/fuchsia/bg-alt-hover': variantColor.secondary.fuchsia[900],
  'secondary/fuchsia/bg-alt-pressed': variantColor.secondary.fuchsia[800],
  'secondary/fuchsia/text': variantColor.secondary.fuchsia[300],
  'secondary/fuchsia/text-alt': variantColor.secondary.fuchsia[100],
  'secondary/fuchsia/text-inverse': variantColor.secondary.fuchsia.max,
  'secondary/fuchsia/text-disabled': variantColor.secondary.fuchsia[900],
  'secondary/fuchsia/icon-base': variantColor.secondary.fuchsia[500],
  'secondary/fuchsia/icon-text': variantColor.secondary.fuchsia[300],
  'secondary/fuchsia/icon-alt': variantColor.secondary.fuchsia[100],
  'secondary/fuchsia/icon-inverse': variantColor.secondary.fuchsia.max,
  'secondary/fuchsia/icon-disabled': variantColor.secondary.fuchsia[900],
  'secondary/fuchsia/border': variantColor.secondary.fuchsia[400],
  'secondary/fuchsia/border-alt': variantColor.secondary.fuchsia[900],
  'secondary/fuchsia/border-disabled': variantColor.secondary.fuchsia[950],
};

export const darkMode = {
  ...textColor,
  ...background,
  ...border,
  ...icon,
  ...secondary,
};

export default darkMode;
