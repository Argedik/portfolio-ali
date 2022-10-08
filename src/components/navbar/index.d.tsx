
// Styles
declare module "*.module.sass"

// Images - Media Files
//declare module '*.jpg' - svg - png

declare module "*.module.sass" {
    const styles: { [className: string]: string };
    export default styles;
  }