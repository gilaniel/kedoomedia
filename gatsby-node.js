// const axios = require('axios');
// const crypto = require('crypto');

// exports.sourceNodes = async ({ actions }) => {
//   const { createNode } = actions;

//   const newsRequest = await axios.get(
//     `http://gila.stat.yt-dev.1124.ru/youtube/api/news/list?offset=0&status=3`
//   );

//   newsRequest.data.body.map((data, i) => {
//     const newsNode = {
//       id: `${data.news_id}`,
//       parent: `__SOURCE__`,
//       internal: {
//         type: `MediaNews`
//       },
//       children: [],

//       // body
//       // ctime
//       // delete
//       // description
//       // html_path
//       // lang2
//       // main_picture
//       // news_id
//       // published_time
//       // refresh
//       // status
//       // tags
//       // title
//       // url

//       ...data
//     };

//     newsNode.internal.contentDigest = crypto
//       .createHash(`md5`)
//       .update(JSON.stringify(newsNode))
//       .digest(`hex`);

//     createNode(newsNode);
//   });

//   return;
// };

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith('develop')) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom'
        }
      }
    });
  }
};
