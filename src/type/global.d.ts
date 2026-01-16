declare module "*.module.css";
declare module "*.module.scss";
declare module "*.module.sass";

declare module "*.css" {
  const content: { [className: string]: string } | string;
  export default content;
}
