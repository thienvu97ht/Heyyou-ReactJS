<!-- params -->

<!--
Phân trang
-- Người đùng truyền vào params gồm
{
    _limit
    _page,
}

transform từ _page -> _start
    _start = (_page - 1) * _limit

-- Dữ liệu gửi về backend
xóa _page ra khỏi params
{
    _start
    _limit
}

-- Dữ liệu backend trả về
{
    data: [],
    pagination: {
        page: _page, (params người dùng nhập vào)
        limit: _limit, (params người dùng nhập vào)
        total: count, (Gọi thêm 1 API tính count)
    }
}

-->
