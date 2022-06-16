import { t } from '../../support/locales'
import { LANGUAGE, VIEWPORT_LIST } from '../../configs'
import signin from '../../fixtures/data/signin/elements.json'

const userList = [
  ['B', t('signin.usersFail.1')],
  ['A', t('signin.usersFail.0')],
]

describe(`${LANGUAGE} | Test Sign in Success`, () => {
  beforeEach(() => {
    cy.logout()
  })

  VIEWPORT_LIST.forEach(([size, viewport]) => {
    describe(`On | ${size}`, () => {
      beforeEach(() => {
        cy.viewport(viewport)
      })

      describe('should wrong password error work as expect', () => {
        userList.forEach(
          ([user, {
            email, password, nickname, avatar, passwordSignin,
          }]) => {
            beforeEach(() => {
              // cy.serviceUserDelete(email)
              cy.serviceUserCreateAndLogin({
                email,
                password,
                nickname,
                avatar,
              })
              cy.logout()
              cy.visit('/')
            })

            it(`Should signin fail with user ${user}`, () => {
              cy.get(signin.form.EMAIL_INPUT).type(email)
              cy.get(signin.form.PASSWORD_INPUT).type(passwordSignin)
              cy.get(signin.form.LOGIN_BUTTON).click()

              cy.get(signin.MODAL_ERROR_TEXT)
                .should('be.visible')
                .and('contain.text', t('signin.MODAL_ERROR_LABEL'))

              cy.location('pathname').should((path) => {
                expect(
                  path.replace('/signin', ''),
                  'should not redirect to index page',
                ).to.eq('')
              })
            })
          },
        )
      })
    })
  })
})
