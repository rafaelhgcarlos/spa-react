function Button(values) {
  const BtName = values.name.map((button, index) => (
    <button id={button.id} key={index}>
      {button.name}
    </button>
  ));

  return <div className="buttons">{BtName}</div>;
}

export default Button;
