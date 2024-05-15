import { HttpPostClientSpy } from '@data/test/mock-http-client'
import RemoteAuthentication from './remote-autenthication'
import { mockAuthentication } from '@domain/test/mock-authentication'
import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)

  return {
    httpPostClientSpy,
    sut,
  }
}

describe('RemoteAuthentication', () => {
  it('Should call HttpClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(mockAuthentication())
    expect(httpPostClientSpy.url).toBe(url)
  })

  it('Should call HttpClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const autenthicationParams = mockAuthentication()
    await sut.auth(autenthicationParams)
    expect(httpPostClientSpy.body).toEqual(autenthicationParams)
  })
})
