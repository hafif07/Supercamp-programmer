import React from 'react'
import Jadwal from '../../../Component/Program3hari/Jadwal/Jadwal'
import Axios from 'axios'

class JadwalContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      jadwal: [],
      token: '',
      isLoading:false
    }
  }

  componentDidMount () {
    // Axios.get('https://api.supercampprogrammer.com/api/lesson', {
    //   headers: {
    //     Authorization:
    //       'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvbG9naW4iLCJpYXQiOjE1NzU0MjM5OTksIm5iZiI6MTU3NTQyMzk5OSwianRpIjoiQUpDNkZkNUZSbnhLYWUxWiIsInN1YiI6MiwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.gSX1ZpqC-cFr5tMnTH-vdtGbEzR45oHc1gaQRoSpHvQ'
    //   }
    // }).then(res => {
    //     console.log(res.data)
    // })

    const Login = {
      email: 'superprogrammer@gmail.com',
      password: 'itmanager'
    }
    this.setState({
      isLoading:true
    })
    Axios.post('https://api.supercampprogrammer.com/login', Login).then(res => {
      console.log(res.data[0].token)
      const token = res.data[0].token
      this.setState({
        token: token
      })
      Axios.get('https://api.supercampprogrammer.com/api/lesson', {
        headers: {
          Authorization: 'Bearer' + this.state.token
        }
      }).then(res => {
        const jadwal = res.data
        this.setState({
            jadwal:jadwal,
            isLoading:false
        })
      })
    })
  }

  render () {
    return <Jadwal dataTable={this.state.jadwal} isLoading={this.state.isLoading} />
  }
}

export default JadwalContainer
