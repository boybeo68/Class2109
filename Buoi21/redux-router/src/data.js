let invoices = [
  {
    name: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/2998",
  },
];

export function getInvouices() {
  return invoices;
}

export function getInvoice(number) {
  return invoices.find((invoice) => invoice.number === number);
}

// 22 , 23, 24, 25,26, 27, 28

// 21 + 22 : Redux 
// => hoàn thành kiến thức cơ bản nhất reactjs
// 23, 24, 25: Làm 1 project (trên lớp a sẽ hướng dẫn mọi người làm , về nhà sẽ làm thêm )
// 26, 27: Tự nghĩ 1 project để phát triển và làm : đến lớp trao đổi, QA. 

//  cách 1 tuần tự làm tiếp 

// 28: sẽ buổi tổng kết. bảo vệ project: mỗi người tầm 10 -15p 