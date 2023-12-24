 ///Задача 1
    let var_one = prompt('var one');
    let var_two = prompt('var two');
    if (var_one === var_two)
      console.log('equally')
    else
      console.log('not equally');
     var1 += 'world';
     console.log(var1)


    ///Задача 2
    var fruits = ['apple', 'strawberry', 'blueberry', 'raspberry', 'lemon']
    console.log(f.toString())
     switch (fruit) 
     {
            case 'apple':
                console.log(`${fruit} green`);
                break;
            case 'strawberry':
                console.log(`${fruit} red`);
                break;
            case 'blueberry':
                console.log(`${fruit} blue`);
                break;
            case 'raspberry':
                console.log(`${fruit} light red`);
                break;
            case 'lemon':
                console.log(`${fruit} yellow`);
                break;
            default:
                throw new Error('Fruit not found');
        }

    ///Задача 3
    function input_not_null(input_string)
      {
      let output_not_null_string = undefined
      while(true)
        {
        if(isNaN(parseFloat(c)))
          output_not_null_string = prompt(input_string, undefined);
          alert('Ошибка! Строчка должна быть пустой.')
        else
          {
          output_not_null_string = parseFloat(output_not_null_string);
          break
          }
        }
      return output_not_null_string;
      }
    let count_people = inputt('Введите кол-во человек ');
    let salary = inputt('Введите зарплату на кол-во человека ');
    alert('Затраты на ЗП: ' + count_people*salary);


    ///Задача 4
       let badStudents = [];
    let meanRate = [];
    let students = [
    {FIO:'Потапов П.П.', rate:5},
    {FIO:'Ослов О.О.', rate:3.4},
    {FIO:'Козлов К.К.', rate:9},
    {FIO:'Быков Б.Б', rate:2},
    {FIO:'Семенчук С.С', rate:3.4}
    ];
     students.forEach(student => {
        if (student.rate < 0 || student.rate > 5) return;

        if (student.rate < 4) badStudents.push(student);

        meanRate.push(student.rate);
      })

    console.log(`Средняя оценка: ${meanRate.reduce((a, b) => a + b) / meanRate.length}`);
    console.log('Список плохих студентов:');

    if (badStudents.length > 0) 
    {
        badStudents.forEach(student => {
            console.log(`ФИО: ${student.FIO}, Оценка: ${student.rate}`);
        })
    } else 
    {
        console.log('Все студенты хорошие!');
    }
}
