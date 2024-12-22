/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://AI-Course-Generator_owner:q4GxLRn2mdhN@ep-orange-cake-a5gkisrc.us-east-2.aws.neon.tech/course-generator?sslmode=require',
    }
  };
  