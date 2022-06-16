import { t } from '../../support/locales'
import { LANGUAGE, VIEWPORT_LIST } from '../../configs'
import signin from '../../fixtures/data/signin/elements.json'
import home from '../../fixtures/data/home/elements.json'
import { form } from '../../fixtures/data/signup/elements.json'

const userList = [
  ['A', t('signup.usersSuccess.0')],
  ['B', t('signup.usersSuccess.1')],
]

describe(`${LANGUAGE} | Test Success`, () => {
  beforeEach(() => {
    cy.logout()
  })

  VIEWPORT_LIST.forEach(([size, viewport]) => {
    describe(`On | ${size}`, () => {
      before(() => {
        cy.viewport(viewport)
      })

      userList.forEach(([user, {
        email, password, nickname, avatar,
      }]) => {
        beforeEach(() => {
          cy.serviceUserDelete(email)
          cy.visit('/')
        })

        it(`Should Singup success with user ${user}`, () => {
          /* TODO: click `signin.REGISTER_BUTTON` */
          cy.get(signin.REGISTER_BUTTON).click()
          /* TODO: check `cy.location('pathname')` to equal `.should('eq', '/signup')` */
          cy.location('pathname').should('eq', '/signup')

          /* TODO: form.EMAIL_INPUT - type(email) */
          cy.get(form.EMAIL_INPUT).type(email)
          /* TODO: form.NICKNAME_INPUT - type(nickname) */
          cy.get(form.NICKNAME_INPUT).type(nickname)
          /* TODO: form.PASSWORD_INPUT - type(password) */
          cy.get(form.PASSWORD_INPUT).type(password)
          /* TODO: form.UPLOAD_INPUT - attachFile(avatar) */
          cy.get(form.UPLOAD_INPUT).attachFile(avatar)
          /* TODO: form.UPLOAD_ITEM_PREVIEW - should('be.visible') */
          cy.get(form.UPLOAD_ITEM_PREVIEW).should('be.visible')
          /* TODO: form.SUBMIT_BUTTON - click() */
          cy.get(form.SUBMIT_BUTTON).click()

          cy.location('pathname', { timeout: 10000 }).should((path) => {
            expect(path.replace('/', ''), 'should redirect to index page').to.eq('')
          })

          /* TODO: check form.SUBMIT_BUTTON - not exist */
          cy.get(form.SUBMIT_BUTTON).should('not.to.exist')
          /* TODO: check home.EMAIL_LABEL */
          cy.get(home.EMAIL_LABEL).should('contain.text', email)
          /* TODO: check home.NICKNAME_LABEL */
          cy.get(home.NICKNAME_LABEL).should('contain.text', nickname)
          /* TODO: check home.AVATAR_IMAGE - contain ';base64,' */
          cy.get(home.AVATAR_IMAGE).should((element) => {
            expect(element.attr('src'), 'Image should have attr src as base64;').to.contain(';base64,')
          })
        })
      })
    })
  })
})
