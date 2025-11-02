import React from "react";

export default function Card() {
  return (
    <div className="row">
			<PartesDeCard />
			<PartesDeCard />
			<PartesDeCard />
			<PartesDeCard />
		</div>
  );
};
function PartesDeCard() {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
      <div card className="h-100 d-flex flex-column">
      <img src="https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGxhbm8lMjBkZSUyMGZ1bmRvJTIwcGFpc2FnZW18ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000" className="card-img-top" alt="..." />
      <div className="card-body text-center">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
      </div>
    </div>
  )
} 