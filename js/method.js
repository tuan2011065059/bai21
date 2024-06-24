import { NhanVien } from "./nhanVien.js";

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
    if (nhanVien.taiKhoan.length < 4 || nhanVien.taiKhoan.length > 6) {
        
        StringTB = document.getElementById('tbTKNV');
        StringTB.style.display = 'block';
        StringTB.innerHTML = 'nhập mật khẩu 4-6 ký tự'
        return;
    } else {
        document.getElementById('tbTKNV').innerText = '';
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
        doiTuongNhanVien = 'nhân viên trung bình'
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
									
	</tr>
    
    `
    document.querySelector('#tableDanhSach').innerHTML += htmlString;
} 
// document.getElementById('btnThemNV').onclick = function(e){

//     alert('hi')
// }