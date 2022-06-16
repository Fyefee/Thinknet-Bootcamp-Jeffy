import { t } from '../../support/locales'
import { LANGUAGE, VIEWPORT_LIST } from '../../configs'
import signin from '../../fixtures/data/signin/elements.json'
import home from '../../fixtures/data/home/elements.json'

const userList = [
  ['A', t('signin.usersSuccess.0')],
  ['B', t('signin.usersSuccess.1')],
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

      describe('home page should show and working as expect', () => {
        beforeEach(() => {
          cy.visit('/')
        })

        it('Should home page show as expect', () => {
          cy.get(signin.form.EMAIL_INPUT)
            .should('be.visible')
            .and('be.enabled')
            .and('be.empty')
          cy.get(signin.form.PASSWORD_INPUT)
            .should('be.visible')
            .and('be.enabled')
            .and('be.empty')
          cy.get(signin.form.LOGIN_BUTTON)
            .should('be.visible')
            .and('be.enabled')
          cy.get(signin.REGISTER_BUTTON).should('be.visible').and('be.enabled')
          cy.get(signin.form.EMAIL_ERROR_REQUIRED).should('not.be.visible')
          cy.get(signin.form.EMAIL_ERROR_INVALID).should('not.be.visible')
          cy.get(signin.form.PASSWORD_ERROR_REQUIRED).should('not.be.visible')
          cy.get(signin.form.MODAL_ERROR_TEXT).should('not.be.visible')
        })

        it('Should invalid email error work show as expect', () => {
          cy.get(signin.form.EMAIL_INPUT).type('test')
          cy.get(signin.form.EMAIL_ERROR_INVALID)
            .should('be.visible')
            .and('contain.text', t('signin.EMAIL_ERROR_INVALID_LABEL'))
        })

        it('Should required error work show as expect', () => {
          cy.get(signin.form.LOGIN_BUTTON).click()
          cy.get(signin.form.EMAIL_ERROR_REQUIRED)
            .should('be.visible')
            .and('contain.text', t('signin.EMAIL_ERROR_REQUIRED_LABEL'))
          cy.get(signin.form.PASSWORD_ERROR_REQUIRED)
            .should('be.visible')
            .and('contain.text', t('signin.PASSWORD_ERROR_REQUIRED_LABEL'))
        })
      })

      describe('should sign in work as expect', () => {
        userList.forEach(([user, {
          email, password, nickname, avatar,
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

          it(`Should signin success with user ${user}`, () => {
            cy.get(signin.form.EMAIL_INPUT).type(email)
            cy.get(signin.form.PASSWORD_INPUT).type(password)
            cy.get(signin.form.LOGIN_BUTTON).click()

            cy.location('pathname', { timeout: 10000 }).should((path) => {
              expect(path.replace('/', ''), 'should redirect to index page').to.eq('')
            })

            cy.get(signin.form.SUBMIT_BUTTON).should('not.to.exist')
            cy.get(home.EMAIL_LABEL).should('contain.text', email)
            cy.get(home.NICKNAME_LABEL).should('contain.text', nickname)
            cy.get(home.AVATAR_IMAGE).should((element) => {
              expect(element.attr('src'), 'Image should have attr src as base64;').to.contain(';base64,')
            })
          })
        })
      })
    })
  })
})
