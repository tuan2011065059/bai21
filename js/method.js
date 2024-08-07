import { NhanVien } from "./nhanVien.js";
let arrNhanVien = [];
document.getElementById('btnThemNV').onclick = function(e){
    
    e.preventDefault();
    let nhanVien = new NhanVien();
    let arrInput = document.querySelectorAll('.modal-body .form-control');
    
    for(let input of arrInput){
        let id = input.id;
        let value = input.value;
        nhanVien[id] = value;
    }
    let StringTB = '';
    arrNhanVien.push(nhanVien);

    // tai khoản
    if (nhanVien.taiKhoan.length < 4 || nhanVien.taiKhoan.length > 6 || nhanVien.taiKhoan == '') {
        
        StringTB = document.getElementById('tbTKNV');
        StringTB.style.display = 'block';
        StringTB.innerHTML = 'nhập mật khẩu 4-6 ký tự'
        return;
    }
    // họ tên

    if (nhanVien.hoTen == '' || /\d/.test(nhanVien.hoTen)) {
        StringTB = document.getElementById('tbTen');
        if (StringTB) {
            StringTB.style.display = 'block';
            StringTB.innerHTML = 'Tên nhân viên phải là chữ và không được để trống.';
        }
        return;
    }
    // email

    if (nhanVien.email == '') { // || !emailPattern.test(nhanVien.email)
        StringTB = document.getElementById('tbEmail');
        StringTB.style.display = 'block';
         StringTB.innerHTML = 'nhập đúng định dạng email và không được để trống.';
        
        return;
    }
    let tongLuong = 0;
    if(nhanVien.chucVu == 'Sếp'){
       tongLuong = nhanVien.luongCoBan * 3;
    }
    else if(nhanVien.chucVu == 'Trưởng phòng'){
       tongLuong = nhanVien.luongCoBan * 2;
    }
    else if(nhanVien.chucVu == 'Nhân viên'){
        tongLuong = nhanVien.luongCoBan;
    }

    let doiTuongNhanVien = ''
    if(nhanVien.gioLam >=192){
        doiTuongNhanVien = 'nhân viên xuất sắc'
    }
    else if(nhanVien.gioLam >= 176 && nhanVien.gioLam <192){
        doiTuongNhanVien = 'nhân viên giỏi'
    }
    else if(nhanVien.gioLam >=160 && nhanVien.gioLam < 176){
        doiTuongNhanVien = 'nhân viên khá'
    }
    else if(nhanVien.gioLam < 160){
        doiTuongNhanVien = 'trung bình'
    }
    console.log(nhanVien);
    let htmlString = '';
    htmlString = `
    <tr>
		<td>${nhanVien.taiKhoan}</td>
		<td>${nhanVien.hoTen}</td>
		<td>${nhanVien.email}</td>
		<td>${nhanVien.ngayVaoLam}</td>
		<td>${nhanVien.chucVu}</td>
		<td>${tongLuong}</td>
		<td>${doiTuongNhanVien}</td>
        <td>
                <button class="btn btn-primary mx-2" data-toggle="modal" data-target="#myModal">Chỉnh sửa</button>
                <button class="btn btn-danger" onclick="xoaNhanVien(this)" >Xoá</button>
            </td>
									
	</tr>
    
    ` 
    document.querySelector('#tableDanhSach').innerHTML += htmlString;
} 


// window.xoaNhanVien = function (maNhanVien) {
//     let indexDel = arrNhanVien.findIndex(nhanVien => nhanVien.taiKhoan === maNhanVien);
//     if(indexDel !== -1) { 
//         arrNhanVien.splice(indexDel,1);
        
//         renderTableNhanVien(arrNhanVien); 
//     }
// }

// window.chinhSua = function (maNhanVien) {
//     document.querySelector('#taiKhoan').disabled = true;
//     let svUpdate = arrNhanVien.find(nhanVien => nhanVien.taiKhoan === maNhanVien);
//     if(svUpdate) {
//         for (let key in svUpdate){
//             document.querySelector(`#${key}`).value = svUpdate[key];
//         }
//     }
// }








window.xoaNhanVien = function (tag) {
    
    tag.closest('tr').remove();
} 