import React, { Component } from 'react'
import { connect } from 'react-redux'
// import bg from '../../public/img/background.png'
import './DanhSachCuoc.css'

class DanhSachCuoc extends Component {
    render() {
        return (
            <section>
                <div className="danhSachCuoc">
                    <div className="bg"><img src="./img/background.png" alt="bg" /></div>
                    <div className="row items">
                        {this.props.danhSachCuoc.map((item, index) => {
                            return (<div key={index} className="col-md-4 col-4 ">
                                <button onClick={() => this.props.datCuoc(item.ma)} className="btn">
                                    <img src={item.hinhAnh} alt="/" />
                                    <div>{item.diemCuoc}</div>
                                </button>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        danhSachCuoc: state.storeMiniGameReducer.danhSachCuoc
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (ma) => {
            dispatch({
                type: 'DAT_CUOC',
                ma
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuoc)