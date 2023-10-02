import { useState } from "react";

const LANGUAGES = [
  {
    lang: "English",
    abbr: "eng",
  },
  {
    lang: "Spanish",
    abbr: "sp",
  },
  {
    lang: "German",
    abbr: "gm",
  },
  {
    lang: "Italian",
    abbr: "it",
  },
  {
    lang: "Mandarin",
    abbr: "md",
  },
  {
    lang: "Arabic",
    abbr: "ab",
  },
];

const Transcript = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    LANGUAGES[0].abbr
  );

  return (
    <div>
      <h2 className="text-h5 mb-4 text-primary-700">Transcript</h2>
      <form>
        <select
          className="pl-2 pr-4 py-2 border border-[#CFCFCF] rounded text-primary-300 focus:outline-primary-100"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          {LANGUAGES.map(({ lang, abbr }) => (
            <option key={lang} value={abbr}>
              {lang}
            </option>
          ))}
        </select>
      </form>
      <div className="flex flex-col gap-y-4 h-[300px] overflow-y-auto pr-2 mt-8 relative">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          dolores doloribus aspernatur temporibus reiciendis unde sapiente,
          ipsa, explicabo fugiat saepe, placeat nisi pariatur eligendi velit.
          Perspiciatis eveniet ad similique illo?
        </p>
        <p>
          Illum molestias sed, animi corrupti aut suscipit soluta sit ipsa,
          accusamus recusandae atque in culpa deserunt quidem. Eius dolorem
          cupiditate, earum iusto molestias repudiandae, sapiente aliquam
          architecto et necessitatibus dicta?
        </p>
        <p>
          Nisi autem dolore a laborum quam iste voluptatibus praesentium saepe
          nobis magnam repellendus facilis error libero et tempora ratione
          commodi consectetur exercitationem possimus quis distinctio, ut veniam
          non obcaecati? Consectetur.
        </p>
        <p>
          Repellendus repellat totam labore suscipit molestiae recusandae est
          asperiores illum voluptates ut. Suscipit maiores veniam corrupti
          voluptas obcaecati, id voluptatibus, amet eaque optio asperiores et ex
          aut harum mollitia molestias?
        </p>
        <p>
          Harum ipsam hic amet repellendus laborum ex facere doloremque, eaque
          aliquid, soluta esse. Sit ratione laudantium excepturi veniam eveniet
          tempore, doloremque ex commodi, optio voluptas ipsum similique odio
          voluptatem doloribus!
        </p>
        <p>
          Libero dolorem error numquam nostrum provident, maiores quibusdam quo,
          inventore itaque odio placeat mollitia aliquam. Ratione voluptatem
          sunt dicta, debitis perferendis praesentium aut consectetur tempore
          eveniet minus. Amet, officiis nam.
        </p>
        <p>
          At corporis aliquid impedit saepe nobis! Nesciunt recusandae maxime
          aliquid, deleniti explicabo saepe rem veritatis quasi id non
          doloremque ea ratione repellendus pariatur facere debitis qui? Harum,
          expedita? Est, consequuntur.
        </p>
        <p>
          Aut itaque libero autem minima hic, nam inventore aliquid laudantium
          doloremque soluta laborum cupiditate unde. Quisquam dolor dignissimos,
          dolores minima quo veritatis velit nisi quam cum voluptatibus qui
          corrupti ipsum?
        </p>
        <p>
          Necessitatibus eligendi beatae qui, magnam animi eaque dolorem dolore
          odio at autem exercitationem iure nulla optio. Dignissimos iste, sunt
          sint quod ipsa, tempora alias labore dolores, eos ducimus veritatis
          fugiat!
        </p>
        <p>
          Nesciunt quo error, quae expedita cumque eos possimus facere, labore
          officia laudantium omnis vitae at recusandae reiciendis minima vero
          ipsam aliquid nostrum voluptatibus atque rem soluta repellat.
          Molestias, possimus in?
        </p>
      </div>
    </div>
  );
};

export default Transcript;
