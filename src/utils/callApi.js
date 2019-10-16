import axios from 'axios';
const host = 'http://ec2-52-79-236-250.ap-northeast-2.compute.amazonaws.com:8080';

export default callApi = async (method, endPoint, params) => {
    try {
        const response = await fetch(`${host}/${endPoint}`, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
        const data = await response.json()
        console.log(data)
        return data;

    } catch (error) {
        console.log(error)
    }
};