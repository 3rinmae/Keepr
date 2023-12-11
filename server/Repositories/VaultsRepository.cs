





namespace Keepr.Repositories;

public class VaultsRepository
{
  private readonly IDbConnection _db;

  public VaultsRepository(IDbConnection db)
  {
    _db = db;
  }

  internal Vault CreateVault(Vault vaultData)
  {
    string sql = @"
      INSERT INTO 
      vaults(name, description, img, isPrivate, creatorId)
      VALUES(@Name, @Description, @Img, @IsPrivate, @CreatorId);
      
      SELECT
      vau.*,
      acc.*
      FROM vaults vau
      JOIN accounts acc ON acc.id = vau.creatorId
      WHERE vau.id = LAST_INSERT_ID();";
    Vault vault = _db.Query<Vault, Profile, Vault>(sql, VaultBuilder, vaultData).FirstOrDefault();
    return vault;
  }

  internal void DestroyVault(int vaultId)
  {
    string sql = "DELETE FROM vaults WHERE id = @vaultId LIMIT 1;";
    _db.Execute(sql, new { vaultId });
  }

  internal List<Vault> GetMyVaults(string userId)
  {
    string sql = @"
      SELECT 
      vau.*,
      acc.*
      FROM vaults vau
      JOIN accounts acc on acc.id = vau.creatorId
      WHERE vau.creatorId = @userId;";
    List<Vault> vaults = _db.Query<Vault, Profile, Vault>(sql, (vaults, profile) =>
    {
      vaults.Creator = profile;
      return vaults;
    }, new { userId }).ToList();
    return vaults;
  }

  internal Vault GetVaultById(int vaultId, string userId)
  {
    string sql = @"
      SELECT
      vau.*,
      acc.*
      FROM vaults vau
      JOIN accounts acc ON acc.id = vau.creatorId
      WHERE vau.id = @vaultId;";
    Vault vault = _db.Query<Vault, Profile, Vault>(sql, VaultBuilder, new { vaultId }).FirstOrDefault();
    return vault;
  }

  internal List<Vault> GetVaultsByProfileId(string profileId, string userId)
  {
    string sql = @"
    SELECT
    v.*,
    acc.*
    FROM vaults v
    JOIN accounts acc ON acc.id = v.creatorId
    WHERE v.creatorId = @profileId AND (v.creatorId = @userId OR v.isPrivate = false);";
    List<Vault> vaults = _db.Query<Vault, Profile, Vault>(sql, (vaults, profile) =>
    {
      vaults.Creator = profile;
      return vaults;
    }, new { profileId, userId }).ToList();
    return vaults;
  }

  internal Vault UpdateVault(Vault vaultToUpdate)
  {
    string sql = @"
      UPDATE vaults
      SET
      name = @Name,
      description = @Description,
      img = @Img,
      isPrivate = @IsPrivate
      WHERE id = @Id LIMIT 1;
      
      SELECT
      vau.*,
      acc.*
      FROM vaults vau
      JOIN accounts acc ON acc.id = vau.creatorId
      WHERE vau.id = @Id;";

    Vault vault = _db.Query<Vault, Profile, Vault>(sql, VaultBuilder, vaultToUpdate).FirstOrDefault();
    return vault;
  }

  private Vault VaultBuilder(Vault vault, Profile profile)
  {
    vault.Creator = profile;
    return vault;
  }
}