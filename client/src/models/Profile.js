export class Profile {
  constructor(data) {
    this.id = data.id
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.Name = data.Name
    this.picture = data.picture
    this.coverImg = data.coverImg
  }
}