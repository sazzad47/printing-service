import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
    <div className="skewed-bg">
	<div className="content">
		<h1 className="title">Skewed background with CSS</h1>
     <p className="text">This is a quick example to show @AlbertGlezRoges how to get skewed backgrounds with plain HTML & CSS.</p>
	</div>
</div>

<footer className="footer">
	<p className="credits">
    Pen by Jose L Pimienta 
    <a className="link" href="https://twitter.com/pipozoft">@pipozoft</a>
  </p>
</footer>
      {/* <div className="bg-neutral-200 p-4 text-center text-neutral-700">
        © 2023 Copyright:
        <a
          className="text-neutral-800 no-underline dark:text-neutral-400"
          href="https://valueprint.com/"
        >
          ValuePrint
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
