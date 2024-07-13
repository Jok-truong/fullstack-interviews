### 1. Sự khác nhau giữa `var` , `let`, `const`

| keyword         | const                                                                                                                                                                                                    | let                                                                                                                                                                                                      | var                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scope (phạm vi) | `const` và `let` : Cả hai đều là block scope, nghĩa là chúng chỉ có thể truy cập được trong block `{}` mà chúng được khai báo                                                                            | `const` và `let` : Cả hai đều là block scope, nghĩa là chúng chỉ có thể truy cập được trong block `{}` mà chúng được khai báo                                                                            | - Function scope nếu nó được khai báo trong một hàm. <br/> - Global scope nếu nó được khai báo ngoài hàm                                                             |
| Hoisting        | `let` hoặc `const` khi được hoist không khởi tạo với giá trị `undefined`. Thay vào đó, chúng sẽ có trạng thái gọi là `Temporal Dead Zone` → dẫn đến lỗi `ReferenceError` nếu truy cập trước khi khao báo | `let` hoặc `const` khi được hoist không khởi tạo với giá trị `undefined`. Thay vào đó, chúng sẽ có trạng thái gọi là `Temporal Dead Zone` → dẫn đến lỗi `ReferenceError` nếu truy cập trước khi khao báo | - Tất cả các định nghĩa biến với var có giá trị ban đầu là undefined . Đó là vì hoisting đã đưa các khai báo biến vào bộ nhớ và khởi tạo chúng với giá trị undefined |

| Khai báo lại (Re-declaration)
Cập nhật (update) | - Không thể update giá trị cũng như re-declaration.
<br/> - Khi khoa báo, const yêu cầu phải được khởi tạo giá trị| `let` hoặc `const` khi được hoist không khởi tạo với giá trị `undefined`. Thay vào đó, chúng sẽ có trạng thái gọi là `Temporal Dead Zone` → dẫn đến lỗi `ReferenceError` nếu truy cập trước khi khao báo | - Tất cả các định nghĩa biến với var có giá trị ban đầu là undefined . Đó là vì hoisting đã đưa các khai báo biến vào bộ nhớ và khởi tạo chúng với giá trị undefined |

### 2. **Hoisting trong Javascript**

Hoisting là một hành vi mặc định trong Javascript, nó sẽ chuyển tất cả khai báo biến và hàm lên trên cùng.

![2](https://github.com/Ren0503/fullstack-interviews/raw/main/frontend/javascript/assets/hoisting-in-js.png)

Điều này có nghĩa là bất kể hàm và biến được khai báo ở đâu, chúng cũng sẽ đuọc chuyển lên đầu scope. Scope có thể là toàn cục hoặc cục bộ.

### 3. Kiểu dữ liệu trong JS

![1](https://aptech.fpt.edu.vn/wp-content/uploads/2022/12/cac-kieu-du-lieu-trong-js-thuong-gap-538x400.jpg)

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

### 5. So sánh `==` và `===`

- Cả hai đều là toán tử so sánh. **JS** có hai kiểu so sánh nghiêm ngặt và chuyển đổi lại
- `==` là **toán tử so sánh trừu tượng** → so sánh hai giá trị sau khi **thực hiện đổi kiểu dữ kiệu (nếu cần)**, để chúng so sánh công bằng với nhau. Nếu 2 giá trị không cùng kiểu, JS sẽ cố gắng ép kiểu chúng sang một kiểu chung rồi mới thực hiện so sánh.
  ```tsx
  console.log(3 == "3"); // true, vì "3" được chuyển đổi thành số trước khi so sánh
  console.log(true == "1"); // true, vì '1' được chuyển đổi thành true
  ```
- `===` là **toán tử nghiêm ngặc** → so sánh hai giá trị nghiêm ngặc, nó sẽ không thực hiện chuyển đổi kiểu dữ liệu giữa hai giá trị được so sánh → điều này có nghĩa là nếu hai giá trị có kiểu dữ liệu khác nhau `===` sẽ trả về `false` .
  ```tsx
  console.log(3 === "3"); // false, vì một bên là số và một bên là chuỗi
  console.log(true === "1"); // false, vì một bên là boolean và một bên là chuỗi
  ```

### **6. [Sự khác biệt giữa Arrow Function và Function trong Javascript](https://topdev.vn/blog/5-diem-khac-nhau-giua-function-thuong-va-arrow-function/)**

- Arrow Function
  - Còn được biết đến là hàm mũi tên một các viết ngắn gọn với ES6 → nó mang tính năng mới của ES6 giúp code trở nên ngắn gọn
  - Và đặc biết Arrow Function không **hosting**

### 7. **Closure trong Javascript là gì**

- Closure là một hàm bên trong → truy cập đến các giá trị bên ngoài phạm vi của nó

```tsx
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

let counter = createCounter();
counter(); // 1
```

### 8. Array , thuộc tính và phương thức của Array

- `Array` là một kiểu dữ liệu tham chiếu (reference type) được dùng để lưu trữ liều giá trị trong một biến duy nhất. Mỗi giá trị trong array được gọi là phần tử (element), và mỗi element có một chỉ mục (index) bất đầu từ 0
- Khai báo `Array`

  ```tsx
  // Array literals
  var foo = [];
  var numbers = [1, 2, 3, 4, 5];

  // Arrray constructor - new
  var foo = new Array();
  var numbers = new Array(1, 2, 3, 4, 5);
  ```

- Thuộc tính và phương thức

  - `length` thuộc tính trả về độ dài mảng
    ```tsx
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.length); // Output: 5
    ```
  - `push()` phương thức thêm một hoặc nhiều element vào cuối mảng và trả về độ dài mới của mảng
    ```tsx
    let array = [1, 2, 3];
    let newLength = array.push(4, 5);
    console.log(array); // Output: [1, 2, 3, 4, 5]
    console.log(newLength); // Output: 5
    ```
  - `pop()` phương thức xóa phần từ cuối cùng và trả về phần từ đã xóa
    ```tsx
    let arr = [1, 2, 3, 4, 5];
    let removedElement = arr.pop();
    console.log(arr); // Output: [1, 2, 3, 4]
    console.log(removedElement); // Output: 5
    ```
  - `shift()` phương thức xóa phần từ đầu tiên và trả về phần từ đó
    ```tsx
    let arr = [1, 2, 3, 4, 5];
    let removedElement = arr.shift();
    console.log(arr); // Output: [2, 3, 4, 5]
    console.log(removedElement); // Output: 1
    ```
  - `unshift()` phương thức thêm một hoặc nhiều phần tử và đầu mảng và trả về độ dài mới của mảng
    ```tsx
    let arr = [2, 3, 4, 5];
    arr.unshift(0, 1);
    console.log(arr); // Output: [0, 1, 2, 3, 4, 5]
    console.log(arr.length); // Output: 6
    ```
  - `map(), filter(), find(), reduce()` Các phương thức tìm kiếm, biến đổi và xử lý dữ liệu trong mảng

    ```tsx
    // map
    let arr = [1, 2, 3, 4, 5];
    let newArr = arr.map((x) => x * 2);
    console.log(newArr); // Output: [2, 4, 6, 8, 10]

    // filter
    let arr = [1, 2, 3, 4, 5];
    let filteredArr = arr.filter((x) => x > 3);
    console.log(filteredArr); // Output: [4, 5]

    // find
    let arr = [1, 2, 3, 4, 5];
    let foundElement = arr.find((x) => x > 3);
    console.log(foundElement); // Output: 4

    // reduce
    let arr = [1, 2, 3, 4, 5];
    let sum = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    console.log(sum); // Output: 15
    ```

  - `includes()` phương thức kiểm tra sự tồn tại của một phần tử trong mang và trả về `true` hoặc `false`
    ```tsx
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.includes(3)); // Output: true
    console.log(arr.includes(6)); // Output: false
    ```
  - `indexOf()` phương thức trả về chỉ mục đầu tiên tìm thấy của phần tử trong mảng, hoặc `-1` nếu không tìm thấy
    ```tsx
    let arr = [1, 2, 3, 4, 5];
    console.log(arr.indexOf(3)); // Output: 2
    console.log(arr.indexOf(6)); // Output: -1
    ```
  - `join()` phương thức nối các phần tử thành một chuỗi, với một ký tự nối (nếu cung cấp)
    ```tsx
    let array = [1, 2, 3];
    let joinedString = array.join("-");
    console.log(joinedString); // Output: "1-2-3"
    ```

- Lưu ý:

  - Mảng trong JS có thể chứa các phần từ với kiểu dữ liệu hác nhau, bao gồm số, chuỗi, …
  - Mảng có thể sử dụng với các loops như `for, forEach, for ... of` để duyệt qua các phần từ

    ```tsx
    // for
    let array = [1, 2, 3, 4];
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }

    // forEach
    let array = [1, 2, 3, 4];
    array.forEach((element) => {
      console.log(element);
    });

    // for ... of
    let array = [1, 2, 3, 4];
    for (let element of array) {
      console.log(element);
    }
    ```

### 9. CallBack là gì

- một hàm sẽ được thực thi sau khi một hàm khác được thực thi xong
- Một hàm được truyền như là một đối số vào một hàm khác và sẽ được thực thi sau khi hàm kia đã hoàn thành một nhiệm vụ cụ thể.

  ```tsx
  function doSomething(callback) {
    console.log("Doing something...");
    // Sau khi làm xong điều gì đó, gọi callback
    callback();
  }

  function finished() {
    console.log("Finished doing something!");
  }

  // Gọi hàm doSomething và truyền hàm finished làm callback
  doSomething(finished);
  ```

- Callback trong các thao tác bất đồng bộ
  `setTimeout` nhận một callback function và thực hiện nó sau 2 giây. `console.log('End')` được thực hiện trước callback function vì `setTimeout` là bất đồng bộ.

  ````tsx
  console.log('Start');

      setTimeout(function() {
          console.log('This is a callback function');
      }, 2000);

      console.log('End');
      ```

  ````

- Lưu Ý

  - **Callback Hell:** Khi sử dụng quá nhiều callback lồng nhau, mã nguồn có thể trở nên khó đọc và bảo trì. Điều này thường được gọi là "Callback Hell" hoặc "Pyramid of Doom".
    ```tsx
    doTask1(function (result1) {
      doTask2(result1, function (result2) {
        doTask3(result2, function (result3) {
          console.log("All tasks done!");
        });
      });
    });
    ```
  - Giải pháp cho CallBack Hell:

    - Promises
      ```tsx
      doTask1()
        .then((result1) => doTask2(result1))
        .then((result2) => doTask3(result2))
        .then((result3) => {
          console.log("All tasks done!");
        })
        .catch((error) => {
          console.error("An error occurred: ", error);
        });
      ```
    - Async/Await

      ```tsx
      async function performTasks() {
        try {
          let result1 = await doTask1();
          let result2 = await doTask2(result1);
          let result3 = await doTask3(result2);
          console.log("All tasks done!");
        } catch (error) {
          console.error("An error occurred: ", error);
        }
      }

      performTasks();
      ```

### 10. Sự khác nhau giữa `Promise` và `Asynce/await`

- **`Promises`** (Được giới thiệu trong ES6) là một đối tượng đại diện cho một giá trị sẽ có trong tương lai, có thể là một giá trị thành công hoặc một lý do thất bại. Một Promise có ba trạng thái:

  - `pending`: Đang chờ kết quả.
  - `fulfilled`: Hoàn thành và trả về một giá trị.
  - `rejected`: Bị từ chối và trả về một lý do (thường là lỗi).

  ```tsx
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Giả sử đây là kết quả của một tác vụ bất đồng bộ
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Error fetching data");
        }
      }, 2000);
    });
  }

  fetchData()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  ```

- **`async/await`** (Được giới thiệu trong ES8) là cú pháp ngắn gọn và dễ đọc hơn để làm việc với Promises. Từ khóa `async` được sử dụng để khai báo một hàm bất đồng bộ, hàm này sẽ tự động trả về một Promise. Từ khóa `await` chỉ có thể được sử dụng bên trong hàm `async` và nó sẽ tạm dừng việc thực hiện hàm cho đến khi Promise được giải quyết.

  ```tsx
  async function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Giả sử đây là kết quả của một tác vụ bất đồng bộ
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Error fetching data");
        }
      }, 2000);
    });
  }

  async function getData() {
    try {
      const result = await fetchData();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  getData();
  ```

### 11. `This` trong JS

- `this` là một khái niệm quan trọng và khá phức tạp vì nó phụ thuộc vào ngữ cảnh gọi hàm

1.  **Trong phạm vi toàn cục (Global context)**

    Trong phạm vi toàn cục (global context), `this` tham chiếu đến đối tượng `global` trong môi trường Node.js và đối tượng `window` trong trình duyệt.

    ```tsx
    console.log(this); // Trong trình duyệt: trả về đối tượng window
    ```

2.  **Trong một hàm (Function context)**
    Trong một hàm thông thường, `this` cũng tham chiếu đến đối tượng `global` (hoặc `window` trong trình duyệt) khi hàm đó không thuộc về một đối tượng cụ thể.

    ````tsx
    function myFunction() {
    console.log(this);
    }

        myFunction(); // Trong trình duyệt: trả về đối tượng window
        ```

    ````

3.  **Trong một phương thức của đối tượng (Object method context)**
    Khi `this` được sử dụng bên trong một phương thức của đối tượng, nó tham chiếu đến đối tượng chủ sở hữu của phương thức đó.

    ````tsx
    let person = {
    name: "Alice",
    greet: function() {
    console.log(this.name);
    }
    };

        person.greet(); // Trả về "Alice"
        ```
    ````

---

## Bài tập

```tsx
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A : `Lydia` và `undefined`
- B: `Lydia` và `ReferenceError`
- C: `ReferenceError` và `21`
- D: `undefined` và `ReferenceError`

→ **D**

- Trong hàm đã khai báo biến `name` với `var` ⇒ Điều đó có nghĩa là biến này sẽ được **hoisted** với giá trị mặc định là `undefined` , cho tới khi chúng ta thạt sự định nghĩa biến đó.
- Các biến khác được khai báo với `let` được **hoisted** nhưng khó giống `var` , chúng không được khởi tạo. Chúng ta sẽ không thể truy cập chúng cho tới khi khao báo chúng. Người ta gọi đó là `tem`poral dead zo`ne` ⇒ Javascript sẽ throws một `ReferenceError`
