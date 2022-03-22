const Button = (props) => {
  return (
    <button onClick={props.myFunc}>{props.children}</button>
  );
};

export default Button;
