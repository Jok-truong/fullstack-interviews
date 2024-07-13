### 1. Sự khác nhau giữa `var` , `let`, `const`

| keyword                                                                                                    | const               | let | var |
| ---------------------------------------------------------------------------------------------------------- | ------------------- | --- | --- |
| Scope (phạm vi)                                                                                            | const và let :      |
| - Cả hai đều là block scope, nghĩa là chúng chỉ có thể truy cập được trong block {} mà chúng được khai báo | const và let :      |
| - Cả hai đều là block scope, nghĩa là chúng chỉ có thể truy cập được trong block {} mà chúng được khai báo | phạm vi của var là: |

- Function scope nếu nó được khai báo trong một hàm.
- Global scope nếu nó được khai báo ngoài hàm |
  | Hoisting | let hoặc const khi được hoist không khởi tạo với giá trị undefined. Thay vào đó, chúng sẽ có trạng thái gọi là Temporal Dead Zone → dẫn đến lỗi ReferenceError nếu truy cập trước khi khao báo | let hoặc const khi được hoist không khởi tạo với giá trị undefined. Thay vào đó, chúng sẽ có trạng thái gọi là Temporal Dead Zone → dẫn đến lỗi ReferenceError nếu truy cập trước khi khao báo | Tất cả các định nghĩa biến với var có giá trị ban đầu là undefined . Đó là vì hoisting đã đưa các khai báo biến vào bộ nhớ và khởi tạo chúng với giá trị undefined
  |
  | Khai báo lại (Re-declaration)
  Cập nhật (update) | - Không thể update giá trị cũng như re-declaration.
- Khi khoa báo, const yêu cầu phải được khởi tạo giá trị | - Có thể update nhưng không thể re-declaration trong cùng một scope
- Tuy nhiên, có thể re-declaration trong scope khác nhau | Có thể re-declaration, update trong cùng một scope |

### 2. **Hoisting trong Javascript**

Hoisting là một hành vi mặc định trong Javascript, nó sẽ chuyển tất cả khai báo biến và hàm lên trên cùng.

!https://github.com/Ren0503/fullstack-interviews/raw/main/frontend/javascript/assets/hoisting-in-js.png

Điều này có nghĩa là bất kể hàm và biến được khai báo ở đâu, chúng cũng sẽ đuọc chuyển lên đầu scope. Scope có thể là toàn cục hoặc cục bộ.

### 3. Kiểu dữ liệu trong JS

- **Kiểu dữ liệu nguyên thủy: `String, Number, null, Undefiend, Boolean`**
  - ES6: `symbol, BigInt`
- **kiểu dữ liệu tham chiếu / kiểu object**

### 4. Sự khác nhau giữa `null` và `undefined`

| Giống                                                                                                                                           | Khác                                                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Null và Undefined là hai giá trị đặc biệt trong ngôn ngữ lập trình JS, được sử dụng để đại diện cho những giá trị không có hoặc không xác định. | Null là một giá trị gán, có nghĩa là bạn có thể gán giá trị null cho bất kỳ biến nào khi bạn muốn biến đó trống. Nó được cố ý để trống và sẽ trỏ đến một giá trị trống. |

- Undefined là một biến tồn tại nhưng chưa được khởi tạo. Có nghĩa là sau này, ta có thể quay lại biến của mình và gán cho nó một giá trị mà trước đó nó không có. Vì vậy, nếu ta khai báo một biến mà không có giá trị, nó chỉ được coi là không được khởi tạo.
- typeof null → object
- typeof undefined → undefined |
