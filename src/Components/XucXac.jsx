import React, { Component } from 'react'
import { connect } from 'react-redux'

import './XucXac.css'

class XucXac extends Component {
    render() {
        return (
           <section>
                <div className="container">
                <h3>Kết quả</h3>
                <div className="xucxac row">
                    {this.props.xucXac.map((item, index) => {
                        return (<div id="xucXac" key={index} className="col-md-4 col-4">
                            <img src={item.hinhAnh} alt="/"/>
                        </div>)
                    })}
                </div>
                <button className="btnXoc mt-3" onClick={() => this.props.choiGame()}>
                    <span>Xóc</span>
                </button><hr/>
                <button className="text-center m-4 btn btn-danger" onClick={() => this.props.datLai()}>Cược lại</button>

            </div>
           </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        xucXac: state.storeMiniGameReducer.xucXac,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        choiGame: () => {
            dispatch({
                type: 'CHOI_GAME'
            })
        },
        datLai:()=>{
            dispatch({
                type:'DAT_LAI'
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(XucXac)