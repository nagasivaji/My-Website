// Importing Styles
import './../styles/Component Styles/Certificates.css';

function Certificates(){
    return(
        <div className="_certificatesArea">
            <div className="_titleArea">
                <h4>My Certificates</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className="_contentArea">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLR1bkxVBtpngzD6iwSYIYo8TK422pvGuQQ&usqp=CAU" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLR1bkxVBtpngzD6iwSYIYo8TK422pvGuQQ&usqp=CAU" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLR1bkxVBtpngzD6iwSYIYo8TK422pvGuQQ&usqp=CAU" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    
                    <button class="carousel-control-prev" type="button"     data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Certificates;