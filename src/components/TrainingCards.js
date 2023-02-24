import React from 'react';

export function TrainingCards(props) {

    return (
        <main>
            <div class="container">
            <div class="row mx-auto">
    
            <div class="col-md-6 col-xl-3 d-flex mx-auto">
                <div class="card mb-4">
                    <div class="card-body">
                    <div class="row">
                        <div class="col-sm-auto col-xl-12">
                        <img class="pb-3 mx-auto d-block" src="img/hiking.jpeg" alt="hiking">
                        </div>
                        <div class="col-sm">
                        <h2 class="card-title">Training Programs</h2>
                        <div class="col text-center">
                            <a class="btn btn-dark" href="beginner.html">Learn More</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    
            <div class="col-md-6 col-xl-3 d-flex mx-auto">
                <div class="card mb-4">
                    <div class="card-body">
                    <div class="row">
                        <div class="col-sm-auto col-xl-12">
                        <img class="pb-3 mx-auto d-block" src="img/training.jpeg" alt="training">
                        </div>
                        <div class="col-sm">
                        <h2 class="card-title">Exercise Videos</h2>
                        <div class="col text-center">
                            <a class="btn btn-dark" href="#">Learn More</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    
            <div class="col-md-6 col-xl-3 d-flex mx-auto">
                <div class="card mb-4">
                    <div class="card-body">
                    <div class="row">
                        <div class="col-sm-auto col-xl-12">
                        <img class="pb-3 mx-auto d-block" src="img/equipment.jpeg" alt="the diamond suit symbol">
                        </div>
                        <div class="col-sm">
                        <h2 class="card-title">Equipment Guide</h2>
                        <div class="col text-center">
                            <a class="btn btn-dark" href="#">Learn More</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </main>
    );
}