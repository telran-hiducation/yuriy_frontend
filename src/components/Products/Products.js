import React from 'react';
import style from '../Products/products.module.css';


const Products = () => {
    return (
        <div className={style.productsContainer}>
            <p className={style.productsText1}>
                hiDucation Products
            </p>
            <div className={style.productsInput}>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Topic"
                           aria-describedby="button-addon2"/>

                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
            <div className={style.productsContainer1}>
                <div className={style.productsContainer2}>
                    <div className={style.productsContainer2In}>
                        <p className={style.productsText2}>Math</p>
                    </div>
                    <div className={style.productsContainer2In}>
                        <p className={style.productsText2}>Programming</p>
                    </div>
                    <div className={style.productsContainer2In}>
                        <p className={style.productsText2}>Physics</p>
                    </div>
                </div>
                <div className={style.productsContainer3}>
                    <div className={style.productsContainer3In}>1</div>
                    <div className={style.productsContainer3In}>2</div>
                    <div className={style.productsContainer3In}>3</div>
                    <div className={style.productsContainer3In}>4</div>
                </div>
            </div>


        </div>
    );
};

export default Products;