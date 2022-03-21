

const Collapse = () => {
    return (
    <div>
        <p>
            <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Link with href
            </a>
        </p>

        <div className="collapse" id="collapseExample">
            {/* <div className="card">
                <img src= "https://picsum.photos/id/1/600/400" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title </h5>
                    <p className="card-text"> </p>
                    <p className="card-text"><small className="text-muted"> </small></p>
                </div>
            </div> */}
            Hello
        </div>

    </div>
    )
};

export default Collapse;