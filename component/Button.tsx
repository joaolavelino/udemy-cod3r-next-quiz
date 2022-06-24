import Link from "../node_modules/next/link";
import styles from "../styles/Button.module.scss";

interface ButtonProps {
  href?: string;
  text: string;
  onClick?: (e: any) => void;
  cancel?: boolean;
  outline?: boolean;
  small?: boolean;
  external?: boolean;
}

export default function Button(props: ButtonProps) {
  const cancel = props.cancel ? styles.cancel : "";
  const outline = props.outline ? styles.outline : "";
  const primary = !props.cancel && !props.outline ? styles.primary : "";
  const small = props.small ? styles.small : "";

  function renderButton() {
    return (
      <button
        onClick={props.onClick}
        className={`${styles.button} ${primary} ${cancel} ${outline} ${small}`}
      >
        {props.text}
      </button>
    );
  }

  function renderAnchor() {
    return (
      <a target="_blank" rel="noreferrer">
        {renderButton()}
      </a>
    );
  }

  return props.href ? (
    <Link href={props.href}>
      {props.external ? renderAnchor() : renderButton()}
    </Link>
  ) : (
    renderButton()
  );
}
