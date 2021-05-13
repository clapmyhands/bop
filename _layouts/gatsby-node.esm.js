exports.createPages = ({ graphql, actions }) => {
    
  const { createRedirect } = actions
  createRedirect({ fromPath: '/', toPath: '/overview', isPermanent: true })
}