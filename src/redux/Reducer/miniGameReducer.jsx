const stateDefault = {
    danhSachCuoc: [
        { ma: 'bau', hinhAnh: './img/bau.png', diemCuoc: 0 },
        { ma: 'cua', hinhAnh: './img/cua.png', diemCuoc: 0 },
        { ma: 'tom', hinhAnh: './img/tom.png', diemCuoc: 0 },
        { ma: 'ca', hinhAnh: './img/ca.png', diemCuoc: 0 },
        { ma: 'nai', hinhAnh: './img/nai.png', diemCuoc: 0 },
        { ma: 'ga', hinhAnh: './img/ga.png', diemCuoc: 0 },
    ],
    xucXac: [
        { ma: 'bau', hinhAnh: './img/bau.png', diemCuoc: 0 },
        { ma: 'bau', hinhAnh: './img/bau.png', diemCuoc: 0 },
        { ma: 'bau', hinhAnh: './img/bau.png', diemCuoc: 0 },
    ],
    tongDiem: 100
}
const storeMiniGameReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DAT_CUOC': {
            let mangCuoc = [...state.danhSachCuoc]
            let item = mangCuoc.find(itemCuoc => itemCuoc.ma === action.ma)
            if (state.tongDiem > 0) {
                item.diemCuoc += 10;
                state.tongDiem -= 10
            } else {
                alert('Bạn đã hết điểm cược')
            }
            state.danhSachCuoc = mangCuoc
            return { ...state }
        }
        case 'CHOI_GAME': {
            //Random
            let mangXucXacMoi = []
            for (let i = 1; i <= 3; i++) {
                let random = Math.floor(Math.random() * 6)
                let xucXacMoi = {
                    ma: state.danhSachCuoc[random].ma,
                    hinhAnh: state.danhSachCuoc[random].hinhAnh
                }
                mangXucXacMoi.push(xucXacMoi)
            } state.xucXac = mangXucXacMoi

            //Hoàn Điểm
            for (let itemCuoc of state.danhSachCuoc) {
                let index = mangXucXacMoi.findIndex(item => item.ma === itemCuoc.ma)
                if (index !== -1) {
                    state.tongDiem += itemCuoc.diemCuoc
                }
            }
            //Tăng Điểm
            for (let itemCuoc of mangXucXacMoi) {
                let index = state.danhSachCuoc.findIndex(item => item.ma === itemCuoc.ma)
                if (index !== -1) {
                    state.tongDiem += state.danhSachCuoc[index].diemCuoc
                }
            }
            //Reset
            let mangCuoc = [...state.danhSachCuoc]
            mangCuoc.forEach((item, index) => {
                item.diemCuoc = 0;
            })
            state.danhSachCuoc = mangCuoc
            return { ...state }
        }
        case 'DAT_LAI': {
            let danhSachCuoc = [...state.danhSachCuoc]
            danhSachCuoc.forEach((item, index) => {
                state.tongDiem += item.diemCuoc
                item.diemCuoc = 0;
            })
            state.danhSachCuoc = danhSachCuoc
            return { ...state }
        }
    }
    return { ...state }
}
export default storeMiniGameReducer