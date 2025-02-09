
export default function TodoList() {
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>할일</th>
                        <th>시작일</th>
                        <th>종료일</th>
                        <th>완료</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>React 공부하기</td>
                        <td>2021-10-01</td>
                        <td>2021-10-31</td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>React 공부하기</td>
                        <td>2021-10-01</td>
                        <td>2021-10-31</td>
                        <td><input type="checkbox" /></td>
                    </tr>
                    <tr>
                        <td>React 공부하기</td>
                        <td>2021-10-01</td>
                        <td>2021-10-31</td>
                        <td><input type="checkbox" /></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}