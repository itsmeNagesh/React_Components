import React from 'react'

export default function service() {
  return (
    <>
    <div className="container">
    <h1>TextUtils Services...</h1>
    <ol className="list-group list-group-numbered">
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">UpperCase Convert..</div>
      It can be  Converted text into Uppercase
    </div>
    <span className="badge bg-primary rounded-pill"></span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">LowerCase</div>
      It can be  Converted text into Lowercase.
    </div>
    <span className="badge bg-primary rounded-pill"></span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Clear</div>
      It can be Clear All text from TextArea.
    </div>
    <span className="badge bg-primary rounded-pill"></span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Copy Text</div>
      It can be Select and Copy text.
    </div>
    <span className="badge bg-primary rounded-pill"></span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">Remove Extra Spaces</div>
      It can be Delete All Extra Space from sentance.
    </div>
    <span className="badge bg-primary rounded-pill"></span>
  </li>
</ol>
</div>
    </>
  )
}
