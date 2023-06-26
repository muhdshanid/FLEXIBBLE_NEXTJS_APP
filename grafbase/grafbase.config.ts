import { g, auth, config } from '@grafbase/sdk'



const User = g.model("User", {
  name: g.string().length({min: 2, max: 20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  desc: g.string().optional(),
  gitHubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional()
})

const Project = g.model("Project", {
  title: g.string().length({max: 3}),
  desc: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  gitHubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User)
})

export default config({
 
  schema: g
})
