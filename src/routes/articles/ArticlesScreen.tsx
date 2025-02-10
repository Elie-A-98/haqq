import { useSearch } from "../../lib/search/useSearch";
import { ArticlesList, Root, Search, Title } from "./ArticleScreen.styles";
import { useMemo } from "react";
import { Dictionary } from "../../lib/dictionary/dictionary";
import { Article } from "../../features/article/article.definitions";
import { ArticleSummary } from "../../features/article/article-summary/ArticleSummary";
import { differenceInMilliseconds } from "date-fns";
import { getSummarizedArticle } from "../../features/article/article-summary/ArticleSummary.utils";

const ArticlesMock = [
  {
    title: "Understanding the difference between grid-template and frid-auto",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minima suscipit earum magni asperiores harum culpa aliquid, ab vitae, nesciunt eum fuga quae veniam. Iste placeat, magni cum optio dolorum doloremque vitae ut quae illum odit ratione expedita aliquam delectus vel minus porro, aspernatur distinctio. Cupiditate omnis eligendi nam eveniet consequuntur provident minima numquam ducimus beatae. Cumque earum nisi quod dolore doloribus reprehenderit cupiditate illo cum ducimus perspiciatis optio aliquam, corporis obcaecati ad molestias eveniet voluptate exercitationem hic tenetur sint, maxime qui molestiae ipsam? Pariatur ad commodi enim dolores recusandae! Provident illum dicta maxime quo eligendi quidem, doloremque, at repudiandae aliquid voluptatibus veritatis facere saepe, a eaque vero molestiae unde! Alias laudantium rem nostrum velit totam. Reprehenderit fuga, perferendis corrupti molestias quasi doloribus maxime expedita excepturi dolores temporibus, illo nobis repellendus reiciendis facilis vitae aspernatur ut distinctio non fugiat! Cum nihil rem nobis, laboriosam eum exercitationem dolor totam consequatur, quas, dignissimos in numquam et quo consequuntur quae minima saepe inventore aspernatur! Unde dolore id, iusto, fugiat aut eligendi laudantium tempore minus quam cum, molestias sequi asperiores temporibus. Facilis dolores necessitatibus numquam modi, autem itaque culpa vel mollitia similique eaque placeat molestiae qui est provident, repudiandae vitae. Eligendi ipsam, perspiciatis cumque voluptate inventore ut sint voluptatem nemo atque, dignissimos beatae? Sequi quidem rem eius possimus tenetur, velit vero quos explicabo nulla, nihil, iusto totam non rerum impedit voluptas? Vel sint aliquam totam esse nam consectetur soluta vitae fugiat omnis eius nobis voluptatibus debitis asperiores, at qui similique, odio atque architecto autem beatae ab! Odit praesentium neque pariatur nulla reprehenderit similique recusandae cumque assumenda? Eum tenetur, sit animi praesentium exercitationem, voluptas iste eius saepe consectetur illo dolorem eaque cum magnam harum consequuntur esse laborum porro. Quasi ab labore aspernatur sapiente, libero sequi molestias architecto, repellendus laboriosam doloribus corrupti quia voluptatum debitis et est non cupiditate iusto possimus! Quibusdam, quod consectetur. Saepe quia illo illum ducimus. Suscipit aspernatur in corporis quis reprehenderit autem modi animi. Magnam nemo deserunt repellat dolorum dolores incidunt quod repudiandae aliquam unde reiciendis, quo, architecto eos rem atque? Inventore dolor, molestiae facilis ut tempora, deleniti, blanditiis a quos nemo sapiente accusantium maxime. Commodi recusandae magni corporis optio facere? Architecto, a minus. Earum delectus ad adipisci, minima temporibus aliquam atque ratione distinctio corrupti ea cum quos incidunt? Eius incidunt in saepe laborum et, atque aspernatur dignissimos sapiente ex deleniti nesciunt eligendi deserunt unde dolores aut repellat quaerat explicabo provident qui molestias optio quibusdam sit? Porro, harum!",
    createdDate: new Date(2024, 5, 30).toISOString(),
  },
  {
    title: "Recreating the Github Contribution Graph with CSS Grid Layout",
    content:
      "Reiciendis veritatis, aspernatur debitis exercitationem mollitia ullam, blanditiis necessitatibus sequi id eum quos nobis voluptate error sit ipsum, hic velit adipisci tempore dolore odio laudantium porro. Aliquid quos accusamus assumenda quae eligendi iure in, repudiandae expedita corrupti inventore esse cupiditate, pariatur doloribus. Perferendis totam, distinctio reprehenderit ex itaque reiciendis sequi harum cum saepe quos excepturi consequatur maiores magni eum dolorem illum aut illo iusto placeat officia aliquid quibusdam eius dolore! Explicabo voluptatibus fugiat necessitatibus quidem dolore hic. Natus saepe perferendis in repudiandae consequuntur impedit officia optio animi, eos ipsum dolore tenetur ipsa ducimus tempore quia, incidunt veritatis. Ducimus omnis dicta animi mollitia? Commodi nam voluptate ipsam in debitis possimus blanditiis nostrum iusto tenetur illo exercitationem nisi aliquid, aperiam enim, doloremque nulla! Expedita nam nisi est odit alias nulla, quisquam totam officiis doloribus minima quibusdam optio distinctio hic quo vitae possimus dicta? Est, similique. Voluptatibus labore quasi repudiandae enim ipsa, aut eos dolor fugit. Laboriosam, mollitia saepe atque, error vel nisi, nostrum aut laudantium perspiciatis distinctio sed ipsum dolor at voluptatem fugiat quo eos ea maiores explicabo quos illum! Reiciendis iste maxime modi delectus aperiam nam eos aspernatur tempore in obcaecati fuga unde ad, ab fugiat, praesentium rem. Molestiae neque assumenda corporis nam veritatis nemo, vel dolorum excepturi velit cumque, ipsam rerum facere. Sunt qui aliquid pariatur repellendus tempora perspiciatis doloribus debitis quae quod, incidunt dolores, cupiditate consequatur ipsum amet ducimus corporis. Quasi asperiores enim maiores, obcaecati vero blanditiis. Ut nesciunt nihil qui iusto animi, numquam magnam aperiam officia libero voluptates quibusdam repellendus, inventore earum praesentium. Eveniet ipsa quasi dolores iste blanditiis architecto eaque possimus doloremque nihil, debitis, ipsam quam consequatur voluptatem autem ducimus pariatur sint omnis ut minima consequuntur vel nisi labore ullam expedita. Nesciunt qui architecto, eveniet possimus doloremque eligendi quod harum? Laudantium, alias natus, cum cupiditate, ut vitae in magni tenetur reiciendis quod culpa. Eum, maiores possimus animi exercitationem aliquid dolorem quidem id est fugit libero distinctio doloribus? Facilis, tempora unde molestiae sapiente ut sit earum possimus natus eius veniam doloremque aliquid ad enim aperiam soluta, dolorum similique consequuntur id. Fuga, assumenda sequi. Maiores eveniet sed facere totam, sequi odit ab nemo! Ad veritatis quibusdam modi error, ducimus reprehenderit sapiente a neque? Aspernatur quisquam incidunt adipisci eveniet amet provident, blanditiis rem repellendus quod id numquam! Est natus vitae debitis quis beatae, inventore dicta facilis doloremque labore, obcaecati quae, illo nam incidunt modi asperiores at ullam optio molestiae rem magnam laboriosam ut corporis aut minima. Natus explicabo, facere quas similique ea molestiae. Rerum facilis sed, explicabo error nisi sint, ab natus aut incidunt enim quas velit tempora doloribus illum consequatur molestiae quidem adipisci nemo quam obcaecati in quasi nesciunt, amet voluptates! Perspiciatis rem incidunt vel beatae maxime assumenda id at placeat magni ex, veniam quidem blanditiis doloribus exercitationem eveniet commodi nemo magnam dolorum error architecto ipsa! Tempora, placeat. Nulla obcaecati atque nam, animi minus dignissimos amet, at, quas eligendi tempore impedit a natus ex dolorum eveniet enim assumenda rerum reiciendis beatae quisquam officia facilis corrupti! Asperiores, animi dolorum! Mollitia tempora minus provident veritatis quas delectus sint voluptatum sapiente, eos maiores. Dolor veritatis nam, quo fuga assumenda deleniti explicabo aperiam fugiat exercitationem obcaecati dolores molestias quibusdam cupiditate quia quae earum! Rem, omnis corrupti voluptatibus ut culpa id est magni doloribus, veniam quas totam voluptate recusandae. Velit voluptatem nostrum minima sed consequatur dolorum accusamus, consectetur explicabo nam totam quisquam? Aperiam perferendis in, enim tempora illo ducimus unde praesentium optio nihil recusandae neque voluptas eum sit nulla quis quisquam, maxime eligendi dolor quos consequatur! Praesentium nobis nemo delectus cumque. Eius magnam numquam modi, aliquid eos impedit.",
    createdDate: new Date(2025, 0, 22).toISOString(),
  },
] as const satisfies Article[];

export const ArticlesScreen = () => {
  const { debouncedSearchTerm, handleSearchChange, searchTerm } = useSearch();
  const foundArticles = useMemo(
    () =>
      ArticlesMock.map((article) => getSummarizedArticle(article)).filter(
        (summary) =>
          [summary.title, summary.content, summary.createdDate]
            .join()
            .search(RegExp(debouncedSearchTerm, "gi")) >= 0
      ),
    [debouncedSearchTerm]
  );

  return (
    <Root>
      <Title>Search</Title>
      <Search.Root>
        <Search.Bar
          type="search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Search.Results.Root>
          <Search.Results.Count>
            {foundArticles.length}{" "}
            {Dictionary["articles.x-posts"](foundArticles.length)}{" "}
          </Search.Results.Count>
          {Dictionary["articles.x-found"](foundArticles.length)}
        </Search.Results.Root>
      </Search.Root>

      <ArticlesList>
        {foundArticles
          .sort(
            (a, b) => -differenceInMilliseconds(a.createdDate, b.createdDate)
          )
          .map((article, index) => (
            <li key={String(index)}>
              <ArticleSummary
                highlitedWordCi={debouncedSearchTerm}
                content={article.content}
                title={article.title}
                createdDate={article.createdDate}
              />
            </li>
          ))}
      </ArticlesList>
    </Root>
  );
};
