import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const actionHandler = (event)=>{
    console.log(event);
}
const ErrorModal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.header}</h2>
            </header>
        <p className={classes.content}>{props.content}</p>
        <Button className={classes.actions} onClick={props.onConfirm}>{props.action}</Button>
      </Card>
    </div>
  );
};
export default ErrorModal;
