/*
 * index.html 페이지가 result.png와 같이 출력되도록
 * data.js 파일 내에 담긴 데이터들을 기반으로
 * stage1.js => stage2.js 순으로 파일을 완성해 주세요.
 */

// Stage 1

// calculateAverage 함수는 designateGrade(stage2.js) 내부에서 전달인자로 넘겨준 데이터를 students라는 매개변수로 받아옵니다.
// students 매개변수는 data.js 안에 있는 배열 데이터를 그대로 받아오게 됩니다.
// 해당 데이터를 기반으로 각 학생의 평균 점수를 구해주세요. 시험을 치룬 과목의 수는 모든 학생이 동일하게 4 과목입니다.

// scoreAverage 배열에 담기는 객체는 각 학생의 이름, 각 학생의 평균 점수를 값으로 가져야 합니다.
// ex) scoreAverage = [ { name : "이정훈", score : 70.5 }, ... ]
// 모든 학생의 정보를 담은 scoreAverage 배열을 return 해주세요. return된 데이터는 stage2.js 파일로 전달됩니다.

export const calculateAverage = function (students) {
    // 여기에서 작업하세요.
    const scoreAverage = [];

    for(let student in students){
        const studentInfo = students[student];
        const keys = Object.keys(studentInfo);
        
        let studentName = '';
        let scoreArr = [];
        let result = 0;

        keys.forEach(key => {
            if(key === 'name'){
                studentName = studentInfo[key];
            } else {
                scoreArr.push(studentInfo[key])
            }
        })

        scoreArr.forEach(score => {
            result += score;
        })
        
        scoreAverage.push({
            name: studentName,
            score : result / scoreArr.length
        })    
    }

    return scoreAverage;
};
