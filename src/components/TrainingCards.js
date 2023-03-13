import React from 'react';
import {Link} from 'react-router-dom';

export function TrainingCards(props) {

    return (
        <div className="container">
            <div className="row mx-auto">
                <div className="col-md-6 col-xl-3 d-flex mx-auto">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div class="row">
                                <div className="col-sm-auto col-xl-12">
                                    <img className="pb-3 mx-auto d-block" src="img/hiking.jpeg" alt="hiking"></img>
                                </div>
                                <div className="col-sm">
                                    <h2 className="card-title">Training Programs</h2>
                                    <div className="col text-center">
                                        <Link className="btn btn-dark" to="/beginner">Learn More</Link>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mx-auto">
                <div className="col-md-6 col-xl-3 d-flex mx-auto">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div class="row">
                                <div className="col-sm-auto col-xl-12">
                                    <img className="pb-3 mx-auto d-block" src="img/training.jpeg" alt="training"></img>
                                </div>
                                <div className="col-sm">
                                    <h2 className="card-title">Exercise Videos</h2>
                                    <div className="col text-center">
                                        <Link className="btn btn-dark" to="/beginner">Learn More</Link>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mx-auto">
                <div className="col-md-6 col-xl-3 d-flex mx-auto">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div class="row">
                                <div className="col-sm-auto col-xl-12">
                                    <img className="pb-3 mx-auto d-block" src="img/equipment.jpeg" alt="equipment"></img>
                                </div>
                                <div className="col-sm">
                                    <h2 className="card-title">Equipment Guide</h2>
                                    <div className="col text-center">
                                        <Link className="btn btn-dark" to="/beginner">Learn More</Link>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )

}