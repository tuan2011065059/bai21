document.getElementById('btnThemNV').onclick = function() {
    // Lấy các giá trị từ các input
    let taiKhoan = document.getElementById('tknv').value.trim();
    let hoTen = document.getElementById('name').value.trim();
    let gmail = document.getElementById('email').value.trim();
    let ngayLam = document.getElementById('datepicker').value.trim();
    let luong = document.getElementById('luongCB').value.trim();
    let chucVu = document.getElementById('chucvu').value.trim();
    let password = document.getElementById('password').value.trim();

    // Kiểm tra nếu trường họ và tên không được nhập
    if (taiKhoan.length < 4 || taiKhoan.length > 6 || taiKhoan === '') {
        alert('Vui lòng nhập họ và tên người dùng 4-6 ký tự.');
        return; // Dừng chương trình nếu không nhập họ tên
    }

    // Kiểm tra ngày làm không được để trống và phải đúng định dạng mm/dd/yyyy
    if (!isValidDate(ngayLam)) {
        alert('Ngày làm không hợp lệ. Vui lòng nhập đúng định dạng mm/dd/yyyy');
        return; // Dừng chương trình nếu ngày làm không hợp lệ
    }

    // Kiểm tra email không được để trống và phải chứa ký tự @
    if (!isValidEmail(gmail)) {
        alert('Email không hợp lệ. Vui lòng nhập lại');
        return; // Dừng chương trình nếu email không hợp lệ
    }

    // Kiểm tra mật khẩu không được để trống và phải đáp ứng các yêu cầu
    if (!isValidPassword(password)) {
        alert('Mật khẩu không hợp lệ. Vui lòng nhập lại.');
        return; // Dừng chương trình nếu mật khẩu không hợp lệ
    }

    // Tạo một mảng các giá trị từ các input
    let arr = [taiKhoan, hoTen, gmail, ngayLam, chucVu, luong, password];

    // Tạo chuỗi HTML để hiển thị trong bảng
    let danhSach = `
        <tr>
            <td>${taiKhoan}</td>
            <td>${hoTen}</td>
            <td>${gmail}</td>
            <td>${ngayLam}</td>
            <td>${chucVu}</td>
            <td>${luong}</td>
            <td>Xếp loại</td>
        </tr>
    `;

    // Thêm vào đầu của bảng (prepend) để đảm bảo hiển thị mới nhất lên đầu
    document.getElementById('tableDanhSach').innerHTML += danhSach;

    // Đóng modal sau khi thêm thành công
    $('#myModal').modal('hide');

    // Hiển thị thông báo thành công trong modal
    $('#myModal .modal-footer').prepend('<div class="alert alert-success">Thêm thành công!</div>');

    // Xóa thông báo sau 2 giây
    setTimeout(function() {
        $('#myModal .alert-success').remove();
    }, 2000);

    // Reset các giá trị trong các input
    document.getElementById('tknv').value = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('datepicker').value = '';
    document.getElementById('luongCB').value = '';
    document.getElementById('chucvu').value = 'Chọn chức vụ';
    document.getElementById('password').value = '';
};

// Hàm kiểm tra định dạng ngày (mm/dd/yyyy)
function isValidDate(dateString) {
    // Biểu thức chính quy kiểm tra định dạng mm/dd/yyyy
    let regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/\d{4}$/;
    return regex.test(dateString);
}

// Hàm kiểm tra định dạng email (phải có ký tự @)
function isValidEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Hàm kiểm tra mật khẩu (phải có ít nhất một chữ cái in hoa, một số và một ký tự đặc biệt)
function isValidPassword(password) {
    // Biểu thức chính quy kiểm tra mật khẩu
    let regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,10}$/;
    return regex.test(password);
}
