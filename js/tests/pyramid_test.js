export const tests = []
const t = (f) => tests.push(f)
t(({ code }) => code.split('\n').filter((s) => s.trim()).length < 38)
t(({ code }) => !code.includes('$'))

t(({ eq }) => eq(pyramid('a', 5), $5.slice(1, -1)))
t(({ eq }) => eq(pyramid('+', 10), $10.slice(1, -1)))
t(({ eq }) => eq(pyramid('#', 40), $40.slice(1, -1)))
t(({ eq }) => eq(pyramid('{}', 12), $12.slice(1, -1)))
t(({ eq }) => eq(pyramid('ABC', 7), $7.slice(1, -1)))
t(({ eq }) => eq(pyramid('<^>', 13), $13.slice(1, -1)))

Object.freeze(tests)

const $5 = `
    a
   aaa
  aaaaa
 aaaaaaa
aaaaaaaaa
`

const $10 = `
         +
        +++
       +++++
      +++++++
     +++++++++
    +++++++++++
   +++++++++++++
  +++++++++++++++
 +++++++++++++++++
+++++++++++++++++++
`

const $7 = `
                  ABC
               ABCABCABC
            ABCABCABCABCABC
         ABCABCABCABCABCABCABC
      ABCABCABCABCABCABCABCABCABC
   ABCABCABCABCABCABCABCABCABCABCABC
ABCABCABCABCABCABCABCABCABCABCABCABCABC
`
const $12 = `
                      {}
                    {}{}{}
                  {}{}{}{}{}
                {}{}{}{}{}{}{}
              {}{}{}{}{}{}{}{}{}
            {}{}{}{}{}{}{}{}{}{}{}
          {}{}{}{}{}{}{}{}{}{}{}{}{}
        {}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
      {}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
    {}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
  {}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}
`

const $13 = `
                                    <^>
                                 <^><^><^>
                              <^><^><^><^><^>
                           <^><^><^><^><^><^><^>
                        <^><^><^><^><^><^><^><^><^>
                     <^><^><^><^><^><^><^><^><^><^><^>
                  <^><^><^><^><^><^><^><^><^><^><^><^><^>
               <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>
            <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>
         <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>
      <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>
   <^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>
<^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^><^>
`

const $40 = `
                                       #
                                      ###
                                     #####
                                    #######
                                   #########
                                  ###########
                                 #############
                                ###############
                               #################
                              ###################
                             #####################
                            #######################
                           #########################
                          ###########################
                         #############################
                        ###############################
                       #################################
                      ###################################
                     #####################################
                    #######################################
                   #########################################
                  ###########################################
                 #############################################
                ###############################################
               #################################################
              ###################################################
             #####################################################
            #######################################################
           #########################################################
          ###########################################################
         #############################################################
        ###############################################################
       #################################################################
      ###################################################################
     #####################################################################
    #######################################################################
   #########################################################################
  ###########################################################################
 #############################################################################
###############################################################################
`