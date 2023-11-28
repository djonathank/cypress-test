import spok from 'cy-spok'

class Schemas {
  getTestSchema() {
    return spok({
      status: spok.string, 
      method: spok.string
    })
  }

  getLoginSchema() {
    return spok({
      id: spok.number, 
      username: spok.string, 
      email: spok.string,
      firstName: spok.string,
      lastName: spok.string, 
      gender: spok.string,
      image: spok.string, 
      token: spok.string
    })
  }
}

export default new Schemas()
