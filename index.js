const Button = (props) => {
  //  Write your code here.
  return <button className={props.className}>{props.children}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-buttons-app-bg-container">
    <div className="social-buttons-app-card-container">
      <h1 className="main-heading">Social Buttons</h1>
      <div className="buttons-bg-container">
        <Button className="bg-color-1 button" children="Like" />
        <Button className="bg-color-2 button" children="Comment" />
        <Button className="bg-color-3 button" children="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
