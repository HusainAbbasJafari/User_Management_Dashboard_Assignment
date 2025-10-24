import { createUser, fetchUserById, fetchUsers } from '@/services/user';
import React, { useEffect } from 'react'
import { Sun, Moon } from "lucide-react";
import { useTheme } from 'next-themes';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  

  return (
    <div>Home Page / User List Page

      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea consequuntur eum aliquid quam tenetur vero optio sapiente suscipit cumque quod sed in aperiam, tempore odit mollitia nemo accusantium libero id.
      Error, enim aliquam voluptatum rem corporis officia placeat, sit velit, animi illo dignissimos? Nulla quia, perspiciatis aut ullam suscipit pariatur commodi numquam deserunt eum odio consectetur architecto aperiam inventore earum.
      Eligendi animi perferendis maiores voluptatum ipsam iste nobis nulla, omnis, earum at officia est natus placeat ducimus fuga pariatur rem fugiat blanditiis illo, ipsa corporis quia labore. Hic, deleniti quae.
      Delectus blanditiis sint nihil nam laudantium ex itaque aliquid possimus tenetur dolores? Quisquam odit ex placeat minus reprehenderit libero, dignissimos eos voluptas repudiandae hic quasi. Illo quo sapiente quidem laboriosam.
      Id praesentium in saepe unde voluptatum veritatis nam vero tempore, minima nesciunt molestiae minus architecto adipisci obcaecati illum et, asperiores ex, officia hic quo iusto repudiandae atque ipsum voluptas! Harum.
      Doloremque magni laudantium animi accusamus, qui rem provident, alias ad omnis fugiat autem? Suscipit, possimus ipsum praesentium consequuntur velit inventore odio consequatur laborum sint ea non corporis voluptate cum recusandae!
      Magni error laborum illo amet ut! Earum debitis voluptate eum esse molestiae est ut illum facilis minima. Architecto, accusamus nam sit incidunt fugiat ipsum hic magnam sequi? Totam, odit molestias!
      Laborum, iusto ex architecto ipsa incidunt repellat voluptas delectus voluptatum ducimus, expedita, iure officia? Deleniti distinctio fuga, dolor est saepe temporibus, fugiat cum eos placeat ad facere commodi necessitatibus aliquid?
      Inventore molestias dolorum saepe totam esse perferendis minima expedita quod. Ipsum, esse! Quos repudiandae, explicabo dicta, quas harum recusandae sed perferendis ullam possimus magni ratione omnis, expedita beatae adipisci itaque?
      Voluptas at soluta aut, incidunt officia enim accusantium sed modi quasi aspernatur perspiciatis natus est rem minus eius quae in odit iure saepe ipsa reiciendis amet error hic illum. Sint?
      Maxime deleniti magni facere repellendus deserunt similique quaerat. Minus expedita ut cum magnam error odio beatae ipsa, consectetur tempore iste hic a maxime sequi rerum ratione. Quidem quibusdam doloremque voluptates!
      Temporibus ad iure soluta, voluptas ullam fuga quisquam inventore quae. Voluptatum illum laudantium placeat voluptates culpa! Earum, assumenda quod? Nemo asperiores quae explicabo possimus in deserunt ea accusamus dolores voluptates.
      Dolorem distinctio laborum consequuntur eum eaque voluptatem ullam fugiat harum explicabo veritatis magni inventore, sed cupiditate porro animi nobis voluptatum possimus optio a ducimus soluta dolore provident iure! Exercitationem, cupiditate!
      Fugiat, error. Ratione explicabo beatae quas cum quia non amet alias, ex recusandae tenetur id eius velit incidunt eligendi, eos doloribus culpa. Laborum quam vitae veniam minus distinctio ad iusto.
      Error quisquam recusandae distinctio magni numquam maxime illo doloribus molestias voluptate at laborum itaque fuga eos voluptatibus, asperiores, iure dolores pariatur reprehenderit dicta earum dignissimos beatae similique odio. A, modi.
      Adipisci quibusdam voluptates velit, corporis, non dolores consequuntur sint laboriosam quas, ullam exercitationem quos sunt iure. Nostrum doloribus nisi ducimus voluptate alias amet fugiat quis doloremque. Fuga corrupti asperiores temporibus!
      Fugit modi dolore sunt veritatis, error, vel possimus repellat perspiciatis magni nobis quas enim similique nesciunt excepturi, sed nihil. Iure tempora consequatur consequuntur inventore expedita nobis incidunt accusantium nostrum deleniti.
      Exercitationem quibusdam, ipsam consectetur error magni optio reiciendis vitae! Non eum a nesciunt fuga? Neque nesciunt aspernatur quia quo aperiam perferendis eligendi fugit similique et a, cupiditate voluptates blanditiis iusto.
      Possimus sequi ipsum fuga eius rerum sit eligendi quasi, temporibus, deserunt sed commodi aspernatur odit tenetur quam, aut quas nam sapiente at optio ut perspiciatis pariatur. Magnam at quos unde!
      Recusandae officia impedit ipsum molestiae quaerat pariatur sunt nulla doloribus, dolorem quis quam reprehenderit nesciunt ullam dolores fugiat quisquam odit perferendis debitis saepe earum! Quos tenetur a doloribus velit molestias.
      Voluptatum, deleniti. Obcaecati, pariatur hic perferendis optio vero, reiciendis tenetur ipsa sunt amet delectus possimus veritatis, perspiciatis itaque voluptates esse ducimus minus autem quo laboriosam unde. Aut sequi officiis architecto!
      Perferendis hic harum sint atque. Temporibus nisi explicabo voluptatum iste perspiciatis ullam soluta libero, distinctio consequatur unde, voluptas ipsum. Iure ipsam doloremque quisquam eaque aspernatur. Eligendi dolore dolor iste molestiae.
      Blanditiis, similique, nulla dolorem ut ipsa laboriosam ullam consequatur quibusdam aspernatur fuga praesentium sed quaerat! Dolore, odio debitis, alias atque et fugiat cupiditate nobis in ratione hic cumque sunt unde?
      Ratione ducimus, praesentium officiis vitae rem ipsum obcaecati suscipit ipsa illo alias aspernatur natus sunt deleniti voluptates perferendis iste? Animi, ullam possimus voluptas numquam repudiandae tempora distinctio incidunt voluptatem laborum?
      Deserunt qui quam molestias quibusdam? Excepturi labore similique ad, consequatur veniam dolorum a corporis exercitationem expedita necessitatibus eos explicabo, dignissimos odio fugiat tempora facilis hic maxime? Exercitationem saepe quidem consequatur?
      Unde vitae non natus quos reiciendis autem recusandae dolorem inventore ex aperiam. Illo quos culpa aliquam reprehenderit? Veniam optio voluptatibus aliquid culpa delectus. Explicabo esse alias iste, rem aliquam accusamus.
      Fuga doloremque architecto eligendi? Sapiente velit in voluptatum sint, similique blanditiis consequatur tenetur ratione qui quam itaque vero doloremque consectetur temporibus consequuntur harum vel inventore. At officiis dolorum vel animi.
      Repudiandae maiores, saepe adipisci aut voluptate autem architecto facilis perspiciatis ducimus, quos quae, voluptatem vero consequuntur quia obcaecati enim molestiae sint? Quaerat, nisi. Voluptate unde veritatis earum tempore adipisci! Explicabo.
      Esse delectus excepturi hic perferendis sequi totam ipsa doloremque necessitatibus repellendus ullam ab laudantium pariatur qui vero, impedit ut. Natus saepe vel pariatur fugiat, nostrum voluptas distinctio ab aut dolores?
      Earum pariatur hic, doloremque ipsam repellat suscipit quam a sequi ipsum dolorem cum aliquam adipisci. Ut quia reprehenderit aliquid at voluptatum repellat voluptatem? Non labore nemo placeat nesciunt fugit ullam.
      Ducimus quia rem reprehenderit facere modi pariatur laborum assumenda eos commodi, voluptatibus tenetur vitae! Esse fugiat facere nihil. Quae facere alias voluptate exercitationem rerum at commodi quam non voluptates ea.
      Facilis consectetur sapiente voluptas eaque dolorem unde, est, aliquid cumque atque cum iure laudantium voluptate accusantium consequatur velit numquam a. Ad provident rem maiores nulla voluptatum maxime suscipit obcaecati ex?
      Tempora, dolore, laboriosam eum libero molestias non assumenda, alias nostrum praesentium ullam corrupti! Nihil iste aliquam dolore labore assumenda autem ratione adipisci delectus doloremque alias, necessitatibus totam. Laborum, unde sed.
      Voluptatibus optio dolore minus rerum itaque voluptates eos, officiis assumenda ab doloremque. Cumque, recusandae aut mollitia, nisi veniam soluta ratione sint voluptate, ab sit iure facere voluptas eaque. Cumque, architecto.
      Consectetur, odio temporibus et aspernatur vitae, nisi corporis dolorem inventore doloribus aliquid officia nulla. Dolores eum, error maxime ratione provident ducimus, neque dolore, quo repellat nihil animi! Aliquam, modi odit.
      Obcaecati beatae molestias dolore aut quo repellat ea officiis! Ad, commodi eos. Commodi reprehenderit officiis dolore provident dicta at vero fugiat distinctio. Doloremque dolores quaerat quam ex qui officia ipsa!
      Quae et repellat, obcaecati vitae qui iure voluptas doloribus voluptatum quis ea sed aspernatur veritatis autem velit quisquam sit doloremque? Omnis accusantium nulla rerum, numquam necessitatibus corporis tempore incidunt soluta?
      Aspernatur rerum ullam vitae dolorem accusantium quae, atque facere omnis illo ut? Ipsam voluptatibus quo nesciunt labore blanditiis itaque animi vero, mollitia quos. Mollitia unde facere delectus, eveniet autem illum!
      Fugit, dignissimos quae inventore ut nulla iure incidunt corporis temporibus et adipisci, doloribus quod provident, perspiciatis dolor animi. Suscipit, cum similique nemo voluptatem explicabo earum nihil deleniti quae nesciunt modi.
      Tenetur, saepe numquam. Modi repudiandae, nesciunt illum repellat iste temporibus assumenda expedita distinctio quis ducimus ex veritatis, nam ipsam perspiciatis? Sed repudiandae soluta doloribus ut facilis adipisci nulla, dicta nemo.
      Eligendi inventore dolor ipsam, ab quis iure nam natus perspiciatis. Hic doloribus aperiam eligendi debitis illo iusto nulla! Dolore accusamus quisquam ipsam asperiores sed libero repudiandae voluptatem? Placeat, perferendis numquam?
      Nam porro laudantium illum, vitae vero accusantium voluptatem, quos repellat odio impedit culpa molestias odit ex provident ea quae ut consequatur, nostrum assumenda molestiae. Consequatur in cumque ea at dicta?
      Officiis dolor temporibus incidunt labore iste cum nam molestias nobis magni, aliquid alias dignissimos aspernatur, eaque fugit, velit tempora perspiciatis consequatur necessitatibus dolorum laboriosam quae corrupti? Tempore vitae repellendus iste?
      Alias qui corrupti incidunt, nihil dignissimos blanditiis ab quas tempora adipisci minus modi nostrum dicta hic cumque assumenda exercitationem. Eligendi quo ea, officia itaque odit suscipit voluptate nesciunt fugiat odio?
      Perferendis quaerat corrupti omnis accusamus maiores, sunt quas rerum vitae dicta est ad iure odit eius odio sed ea? Maiores ipsum asperiores deserunt corporis consequuntur fugiat maxime dolorem consectetur aliquam?
      Voluptatibus voluptates, in nemo, sunt ipsum, harum maxime officia cupiditate eaque quo quidem repudiandae expedita corporis impedit quisquam repellat molestiae dolorum autem quae neque deserunt doloribus magnam dolorem. Vero, repellat?
      Rem quis beatae ad sed incidunt veniam. Neque minus soluta harum non fuga animi nemo vitae facere fugit ratione! Dolores quae illum in doloremque eos debitis, ex impedit eius quis!
      Suscipit officiis sequi odit. Incidunt error cumque recusandae maxime tempora quas quibusdam excepturi architecto quia dolores sed obcaecati debitis dignissimos officia totam soluta, magni at reiciendis a labore mollitia minima?
      Accusamus veniam autem repudiandae eius incidunt reprehenderit quo illum vel iste, assumenda perspiciatis dolores fuga dignissimos officiis blanditiis dolorem voluptatibus cumque nihil veritatis error illo a mollitia aspernatur! Voluptates, dolores.
      Ad nam enim, officia, quas cupiditate ea ducimus magni tenetur nulla maxime obcaecati. Itaque aut neque voluptatibus dolor, quas temporibus animi, id sapiente obcaecati autem omnis. Laborum iusto labore quia.
    </div>
  )
}

export default HomePage