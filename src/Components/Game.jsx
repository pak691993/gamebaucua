import React, { Component } from 'react'
import DanhSachCuoc from './DanhSachCuoc'
import XucXac from './XucXac'
import { connect } from 'react-redux'
import './Game.css'

class Game extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center m-4">Well Come</h1>
                <div className="display-4 text-center  m-2">{this.props.tongDiem.toLocaleString()}$</div>
                <div className="row">
                    <div className="col-md-8 col-12"><DanhSachCuoc /></div>
                    <div className="col-md-4 "><XucXac /></div>
                </div>
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        // danhSachCuoc: state.storeMiniGameReducer.danhSachCuoc,
        tongDiem: state.storeMiniGameReducer.tongDiem
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
//         cuocLai: (ma) => {
//             dispatch({
//                 type: 'CUOC_LAI',
//                 ma
//             })
//         }
//     }
// }
export default connect(mapStateToProps,null)(Game)