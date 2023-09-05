# Download and cache articles
node index.js \
  NOTION_TOKEN=secret_IFtotooHL8j8a6Q5OLjlV9c9cTTQ5BcNwi3fWaDnWas \
  DATABASE_ID=e75896c6a2d249338db87f37a34f9629 \
  SITE_FOLDER_PATH=../rimarok \
  CACHE_FOLDER_NAME=articles \
  REINIT_CACHE=y
# Download and cache motifs
node index.js \
  NOTION_TOKEN=secret_IFtotooHL8j8a6Q5OLjlV9c9cTTQ5BcNwi3fWaDnWas \
  DATABASE_ID=e83c1d93f07f497b954c4e94c1d87d9b \
  SITE_FOLDER_PATH=../rimarok \
  CACHE_FOLDER_NAME=motifs \
  REINIT_CACHE=y